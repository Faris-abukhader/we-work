import {useState,useEffect} from 'react'
import AddNewJobModel from '../../../components/dashboard/allWorks/AddNewJobModel'
import WorkCard from '../../../components/dashboard/allWorks/WorkCard'
import AddNewButton from '../../../components/general/AddNewButton'
import Layout from '../../../components/layout/UserLayout'
export default function Index() {
  const [showAddModal,setShowAddModal] = useState(false)
  const [showEditModal,setShowEditModal] = useState(false)
  const [showReviewModal,setShowReviewModal] = useState(false)
  const [reviewModalData,setReviewModalData] = useState({})
  const [updateModalData,setUpdateModalData] = useState({})



  const toggleAddModal = ()=>{
    console.log('toggle')
    setShowAddModal(!showAddModal)
  }

  // const toggleEditModal = ()=>{
  //   setShowEditModal(!showEditModal)
  // }

  // const toggleReviewModal = (id='')=>{
  //   setReviewModalData(items.find((item)=>item.id==id)||{})
  //   setShowReviewModal(!showReviewModal)
  // }

  // const setItemUpdateId = (id)=>{
  //   console.log(id)
  //   dispatch(setData(items.find((item)=>item.id==id)))
  //   setUpdateModalData(items.find((item)=>item.id==id))
  //   console.log(items.find((item)=>item.id==id))
  //   toggleReviewModal()
  //   toggleEditModal()
  // }


  return (
    <Layout current={`All works`}>
        <div className='w-full h-80 py-10 flex justify-center'>
        <div className='w-full px-2 md:px-20 space-y-4'>
          <div className='flex justify-end'>
            <AddNewButton title={`Post new job`} handler={toggleAddModal}/>
          </div>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>

        </div>
        </div>
        <AddNewJobModel show={showAddModal} toggle={toggleAddModal}/>
    </Layout>
  )
}
