import axios from 'axios'
import { getSession } from 'next-auth/react'
import React from 'react'
import { useSelector } from 'react-redux'
import {Education, Header,HourBerWeek,Languages, WorkHistory} from '../../../components/dashboard/profile/profile'
import Layout from '../../../components/layout/UserLayout'
import { setEducation } from '../../../store/slices/education'
import { setLanguage } from '../../../store/slices/language'
import { wrapper } from '../../../store/store'
export default function Index({data}) {
  console.log(data)
  return (
    <Layout>
        <div className='p-4 mt-10 border-2 rounded-2xl'>
            <Header {...data}/>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <HourBerWeek weeklyWantingHour={data?.freelancer?.weeklyWantingHour}/>
                    <Languages/>
                    <Education/>
                    <WorkHistory employmentList={data?.freelancer.products}/>
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

    store.dispatch(setLanguage(data.languageList))
    store.dispatch(setEducation(data.educationList))

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


