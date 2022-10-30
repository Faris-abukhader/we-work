import {useState} from 'react'
import {wrapper} from '../../../store/store'
import { useSelector } from 'react-redux'
import {AddNewRequestModel,ReviewRequestModel,EditRequestModel,RequestCard} from '../../../components/dashboard/employerHiringRequest/employerHiringRequest'
import {AddNewButton,NoDataFound} from '../../../components/general/general'
import Layout from '../../../components/layout/UserLayout'
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'
import { setHiringRequests } from '../../../store/slices/hiringRequest'
export default function Index({jobList,freelancerList}) {
  console.log('here')
  console.log(jobList)
  console.log(freelancerList)
  const session = useSession()
  const token = session.data?.user?.token
  const requestList = useSelector((state)=>state.hiringRequest)
  const accountType = session.data?.user?.accountType
  const [showAddModal,setShowAddModal] = useState(false)
  const [showEditModal,setShowEditModal] = useState(false)
  const [showReviewModal,setShowReviewModal] = useState(false)
  const [reviewModalData,setReviewModalData] = useState({})
  const [updateModalData,setUpdateModalData] = useState({})

  const toggleAddModal = ()=>{
    console.log('toggle')
    setShowAddModal(!showAddModal)
  }
  const toggleEditModal = ()=>{
    setShowEditModal(!showEditModal)
  }

  const toggleReviewModal = (id='')=>{
    console.log('^^^^^^^^^^^^^')
    console.log(requestList.find((item)=>item.id==id)||{})
    setReviewModalData(requestList.find((item)=>item.id==id)||{})
    setShowReviewModal(!showReviewModal)
  }

  const setRequestUpdateId = (id)=>{
    setUpdateModalData(requestList.find((item)=>item.id==id))
    console.log(requestList.find((item)=>item.id==id))
    toggleReviewModal()
    toggleEditModal()
  }

  return (
    <Layout current={`Hired history`} accountType='e'>
        <div className='w-full h-80 py-10 flex justify-center'>
        <div className='w-full px-2 md:px-20 space-y-4'>
          <div className='flex justify-end'>
            {accountType == 'e' && <AddNewButton title={`send new request`} handler={toggleAddModal}/>}
          </div>
        {requestList.length > 0 ?
         requestList.map((request)=><RequestCard key={request.id} {...request} toggleReviewJobModal={toggleReviewModal}/>)
        :
        <NoDataFound label={`You didn't send any hiring request yet.`}/>
        }
        </div>
        </div>
        <AddNewRequestModel show={showAddModal} toggle={toggleAddModal} freelancerList={freelancerList} jobList={jobList} />
        <ReviewRequestModel show={showReviewModal} toggle={toggleReviewModal} data={reviewModalData} setRequestUpdateId={setRequestUpdateId} freelancerList={freelancerList} jobList={jobList} />
        <EditRequestModel show={showEditModal} toggle={toggleEditModal} data={updateModalData}/>
    </Layout>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)
  const userAccount = session.user?.accountType

  if (userAccount == 'e') {
      console.log('*************')
      console.log(session.user)

      const hiringRequest = await axios.get(`${process.env.API_URL}/hiringRequest/employer/all/${session.user.id}`)
      const requestList = hiringRequest.data.data
      store.dispatch(setHiringRequests(requestList))


      const employerJobs = await axios.get(`${process.env.API_URL}/job/all/employerId/${session.user.id}`)
      const jobList = employerJobs.data.data


      const freelancers = await axios.get(`${process.env.API_URL}/freelancer/all`)
      const freelancerList = freelancers.data.data
      
      return {
          props: {
            jobList,
            freelancerList
          }
      }
  } else {
      return {
          redirect: {
              destination: '/dashboard'
          },
          props: {}
      }
  }
})

