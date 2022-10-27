import {useState} from 'react'
import {wrapper} from '../../../store/store'
import { useSelector } from 'react-redux'
import {AddNewJobModel,ReviewJobModel,EditJobModel,WorkCard} from '../../../components/dashboard/allWorks/allWorks'
import {AddNewButton,NoDataFound} from '../../../components/general/general'
import Layout from '../../../components/layout/UserLayout'
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'
import { setJobs } from '../../../store/slices/job'
export default function Index() {
  const session = useSession()
  const token = session.data?.user?.token
  const jobList = useSelector((state)=>state.job)
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
    setReviewModalData(jobList.find((item)=>item.id==id)||{})
    setShowReviewModal(!showReviewModal)
  }

  const setJopUpdateId = (id)=>{
    setUpdateModalData(jobList.find((item)=>item.id==id))
    console.log(jobList.find((item)=>item.id==id))
    toggleReviewModal()
    toggleEditModal()
  }

  return (
    <Layout current={`All works`}>
        <div className='w-full h-80 py-10 flex justify-center'>
        <div className='w-full px-2 md:px-20 space-y-4'>
          <div className='flex justify-end'>
            {accountType == 'e' && <AddNewButton title={`Post new job`} handler={toggleAddModal}/>}
          </div>
        {jobList.length > 0 ?
         jobList.map((item)=><WorkCard key={item.id} {...item} token={token} toggleReviewJobModal={toggleReviewModal}/>)
        :
        <NoDataFound label={`You don't have any job posted yet.`}/>
        }
        </div>
        </div>
        <AddNewJobModel show={showAddModal} toggle={toggleAddModal} />
        <ReviewJobModel show={showReviewModal} toggle={toggleReviewModal} data={reviewModalData} setJobUpdateId={setJopUpdateId} />
        <EditJobModel show={showEditModal} toggle={toggleEditModal} data={updateModalData}/>
    </Layout>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)

  if (session) {
      console.log('*************')
      console.log(session.user)
      const jobRequest = await axios.get(`${process.env.API_URL}/job/all/employerId/${session.user.id}`)
      const jobList = jobRequest.data.data
      store.dispatch(setJobs(jobList))
      
      return {
          props: {}
      }
  } else {
      return {
          redirect: {
              destination: '/api/auth/signin'
          },
          props: {}
      }
  }
})

