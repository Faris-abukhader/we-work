import axios from 'axios'
import { getSession } from 'next-auth/react'
import React from 'react'
import {Header,HourBerWeek,Languages} from '../../../components/dashboard/profile/profile'
import Layout from '../../../components/layout/UserLayout'
import { wrapper } from '../../../store/store'

export default function index({data}) {
  console.log(data)
  return (
    <Layout>
        <div className='p-4 mt-10 border-2 rounded-2xl'>
            <Header {...data}/>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <HourBerWeek weeklyWantingHour={data?.freelancer?.weeklyWantingHour}/>
                    <Languages languageList={data?.languageList}/>
                </div>
            </div>

        </div>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
 const session = await getSession(ctx)
 const accountType = session.user?.accountType
 const userId = session.user?.id
 if(accountType=='f'){
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


