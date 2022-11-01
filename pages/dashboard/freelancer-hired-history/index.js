import {useState} from 'react'
import {wrapper} from '../../../store/store'
import { useSelector } from 'react-redux'
import {ReviewRequestModel,EditRequestModel,RequestCard} from '../../../components/dashboard/freelancerHiringRequest/freelancerHiringRequest'
import {NoDataFound} from '../../../components/general/general'
import Layout from '../../../components/layout/UserLayout'
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'
import { setHiringRequests } from '../../../store/slices/hiringRequest'
export default function Index() {
  const session = useSession()
  const requestList = useSelector((state)=>state.hiringRequest)
  const [showEditModal,setShowEditModal] = useState(false)
  const [showReviewModal,setShowReviewModal] = useState(false)
  const [reviewModalData,setReviewModalData] = useState({})
  const [updateModalData,setUpdateModalData] = useState({})

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
        {requestList.length > 0 ?
         requestList.map((request)=><RequestCard key={request.id} {...request} toggleReviewRequestModal={toggleReviewModal}/>)
        :
        <NoDataFound label={`You didn't send any hiring request yet.`}/>
        }
        </div>
        </div>
        <ReviewRequestModel show={showReviewModal} toggle={toggleReviewModal} data={reviewModalData} setRequestUpdateId={setRequestUpdateId}/>
        <EditRequestModel show={showEditModal} toggle={toggleEditModal} data={updateModalData}/>
    </Layout>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)
  const userAccount = session.user?.accountType

  console.log('###############')
  console.log(userAccount)

  if (userAccount == 'f') {
      console.log('*************')
      console.log(session.user)

      const hiringRequest = await axios.get(`${process.env.API_URL}/hiringRequest/freelancer/all/${session.user.id}`)
      const requestList = hiringRequest.data.data
      store.dispatch(setHiringRequests(requestList))
      
      return {
          props: {}
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

