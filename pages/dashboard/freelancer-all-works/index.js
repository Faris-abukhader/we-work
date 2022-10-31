import React from 'react'
import Layout from '../../../components/layout/UserLayout'
import {wrapper} from '../../../store/store'
import { getSession } from 'next-auth/react'
import { setProducts } from '../../../store/slices/product'
import axios from 'axios'
export default function Index() {
  return (
   <Layout accountType='f' current='All works'>
    <h>freelancer all works</h>
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

