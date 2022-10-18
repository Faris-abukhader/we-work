import React from 'react'
import EmploymentInfo from '../../components/jobDetails/EmploymentInfo'
import EmpolyerInfo from '../../components/jobDetails/EmpolyerInfo'
import JobContent from '../../components/jobDetails/JobContent'
import JobHeader from '../../components/jobDetails/JobHeader'
import SimilarJobs from '../../components/jobDetails/SimilarJobs'
import Layout from '../../components/layout/Layout'
export default function index() {
  return (
    <Layout navBackgroundColor='#000' navHasAnimation={false}>
       <JobHeader/>
       <div className='w-full py-8 flex-row md:flex  grow-0 md:space-x-3'>
        <div className='w-full space-y-3'>
        <EmploymentInfo/>
        <JobContent jobDescription='flkhaer fkhae rkjgae rgjkaerghkjae gjkae hajekrhajg kaehrg akje ghaejk ghaekjg heaj gjkea gkjea gajkeg ejkrg aehkjg ha gahekj gaehgj khaek gjahe gkhaerj gaek hriu gajkrgeurigegiueh gaeu geua igh aegaerugkfdgiaoeguaotevioaeg ;er iogaeiarje eirhuga vjberiu'/>
        </div>
        <div className='w-full md:w-1/3 space-y-3'>
        <EmpolyerInfo/>
        <SimilarJobs/>
        </div>
       </div>
    </Layout>
  )
}
