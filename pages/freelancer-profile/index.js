import axios from 'axios'
import { getSession } from 'next-auth/react'
import React from 'react'
import Layout from '../../components/layout/Layout'
import { wrapper } from '../../store/store'

export default function index({data}) {
  console.log(data)
  return (
    <Layout>
        <h1>fares</h1>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
 const session = await getSession(ctx)
 const {userId} = ctx.query
 if(userId){
    const request = await axios.get(`${process.env.API_URL}/freelancer/${userId}`)
    const data = request.data
    return {
      props:{
        data
      }
    }

 }else{
    return{
        redirect: {
            destination: '/'
        },
        props: {}
    }
 }    
})


