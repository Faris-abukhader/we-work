import React from 'react'
import WorkCard from '../../../components/dashboard/allWorks/WorkCard'
import Layout from '../../../components/layout/UserLayout'

export default function index() {
  return (
    <Layout current={`All works`}>
        <div className='w-full h-80 py-10 flex justify-center'>
        <div className='w-full px-2 md:px-20 space-y-4'>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>

        </div>
        </div>
    </Layout>
  )
}
