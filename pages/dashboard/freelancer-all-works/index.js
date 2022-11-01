import {useState} from 'react'
import Layout from '../../../components/layout/UserLayout'
import {wrapper} from '../../../store/store'
import { getSession } from 'next-auth/react'
import { setProducts } from '../../../store/slices/product'
import axios from 'axios'
import {ProductCard,EditProductModel,ReviewProductModel} from '../../../components/dashboard/freelancerProducts/freelancerProducts'
import {NoDataFound} from '../../../components/general/general'
import { useSelector } from 'react-redux'
export default function Index() {
    const productList = useSelector((state)=>state.product)
    const [showEditModal,setShowEditModal] = useState(false)
    const [showReviewModal,setShowReviewModal] = useState(false)
    const [reviewModalData,setReviewModalData] = useState({})
    const [updateModalData,setUpdateModalData] = useState({})
  
    const toggleEditModal = ()=>{
      setShowEditModal(!showEditModal)
    }
  
    const toggleReviewModal = (id='')=>{
      console.log('^^^^^^^^^^^^^')
      console.log(productList.find((item)=>item.id==id)||{})
      setReviewModalData(productList.find((item)=>item.id==id)||{})
      setShowReviewModal(!showReviewModal)
    }
  
    const setProductUpdateId = (id)=>{
      setUpdateModalData(productList.find((item)=>item.id==id))
      console.log(productList.find((item)=>item.id==id))
      toggleReviewModal()
      toggleEditModal()
    }
  return (
   <Layout accountType='f' current='All works'>
        <div className='w-full h-80 py-10 flex justify-center'>
        <div className='w-full px-2 md:px-20 space-y-4'>
        {productList.length > 0 ?
         productList.map((product)=><ProductCard key={product.id} {...product} toggleReviewRequestModal={toggleReviewModal}/>)
        :
        <NoDataFound label={`You didn't send any hiring request yet.`}/>
        }
        </div>
        </div>
        <ReviewProductModel show={showReviewModal} toggle={toggleReviewModal} data={reviewModalData} setProductUpdateId={setProductUpdateId}/>
        <EditProductModel show={showEditModal} toggle={toggleEditModal} data={updateModalData}/>
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

      const productRequest = await axios.get(`${process.env.API_URL}/product/freelancer/${session.user.id}`)
      const productList = productRequest.data.data
      store.dispatch(setProducts(productList))
      
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

