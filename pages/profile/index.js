import axios from 'axios'
import React from 'react'
import {AboutMe, Certification, Education, EmploymentHistory, Header,HourBerWeek,Languages, WorkHistory} from '../../components/dashboard/profile/profile'
import Layout from '../../components/layout/Layout'
import { setCertification } from '../../store/slices/certification'
import { setEducation } from '../../store/slices/education'
import { setEmploymentHistory } from '../../store/slices/employmentHistory'
import { setLanguage } from '../../store/slices/language'
import { wrapper } from '../../store/store'
export default function Index({data}) {
  return (
    <Layout navHasAnimation={false}>
        <div className='p-8 mt-10 border-2 rounded-2xl'>
            <Header {...data} isReview={true}/>
            <div className='flex-row md:flex'>
                <div className='border-r-none md:border-r-2 md:p-r-4 w-full md:w-3/5 lg:w-2/5'>
                    <HourBerWeek isReview={true} weeklyWantingHour={data?.freelancer?.weeklyWantingHour}/>
                    <Languages isReview={true}/>
                    <Education isReview={true}/>
                </div>
                <div className='w-full'>
                  <div className='md:border-b-2 pb-4'>
                    <AboutMe isReview={true} aboutMe={data?.freelancer?.aboutMe}/>
                  </div>
                  <div className='pl-4'>
                  <WorkHistory isReview={true} employmentList={data?.freelancer.products}/>
                  </div>
                </div>
            </div>

        </div>
        <Certification isReview={true}/>
        <EmploymentHistory isReview={true}/>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
 const {id} = ctx.query

 if(id){
    const request = await axios.get(`${process.env.API_URL}/freelancer/${id}`)
    const data = request.data

    store.dispatch(setLanguage(data.languageList))
    store.dispatch(setEducation(data.freelancer.educationList))
    store.dispatch(setCertification(data.freelancer.certificationList))
    store.dispatch(setEmploymentHistory(data.freelancer.employmentList))

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


