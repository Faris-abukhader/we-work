import React from 'react'
import EmploymentInfo from '../../components/jobDetails/EmploymentInfo'
import EmpolyerInfo from '../../components/jobDetails/EmpolyerInfo'
import JobHeader from '../../components/jobDetails/JobHeader'
import Layout from '../../components/layout/Layout'
export default function index() {
  return (
    <Layout navBackgroundColor='#000' navHasAnimation={false}>
       <JobHeader/>
       <div className='w-full py-8 flex space-x-3'>
       <EmploymentInfo/>
       <EmpolyerInfo/>
       </div>
    </Layout>
  )
}
