import Banner from '../../components/jobList/Banner'
import JobCard from '../../components/jobList/JobCard'
import SearchFilter from '../../components/jobList/SearchFilter'
import SortingBar from '../../components/jobList/SortingBar'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import {fireNotification} from '../../utils/fireNotification'
import { useRouter } from 'next/router'
import ApplyForJobModel from '../../components/jobList/ApplyForJobModel'
import { useState } from 'react'
export default function Index({ jobList }) {
  console.log(jobList)
  const session = useSession()
  const router = useRouter()
  const [showApplyingModel,setShowApplyingModel] = useState(false)
  const [targetJobId,setTargetJobId] = useState(0)

  const goToSignInPage = ()=>{
       router.push('/auth/signIn')
  }
  const handleJobApplying = (jobId)=>{
    if (session.data){
      setShowApplyingModel((prevs)=>!prevs)
      setTargetJobId(jobId)
    }else{
      fireNotification({
        label:'You are not register yet \n register first to apply for jobs !',
        icon:'warning',
        showConfirmButton:true,
        confirmActionLabel:'go sign in',
        showCancelButton:true,
        showConfirmDialog:false,
        showDeniedDialog:false,
        hasHandler:true,
        handler:goToSignInPage})
    }
  }
  return (
    <Layout navBackgroundColor='#000' navHasAnimation={false}>
      <Banner jobNumber={jobList.length} />
      <div className='flex space-x-2'>
        <div className='hidden lg:block w-1/4'>
          <SearchFilter />
        </div>
        <div className='w-full'>
          <SortingBar />
          <div className='w-full p-3 space-y-3'>
            {jobList && jobList.map((job) => <JobCard key={job.id} id={job.id} owner={job?.employer?.user?.firstName + ' ' + job?.employer?.user?.lastName} ownerAvatar={job?.employer?.user?.avatar} location={job.location} jobTitle={job.title} popularKey={job.jobCategory} salary={job.salary} description={job.description} handleApplyButton={handleJobApplying} propsals={job._count.proposalList} />)}
          </div>
        </div>
      </div>
      <ApplyForJobModel show={showApplyingModel} toggle={()=>setShowApplyingModel((prevs)=>!prevs)} jobId={targetJobId}/>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const jobRequest = await axios.get(`${process.env.API_URL}/job/all`)
  const jobList = jobRequest.data.data
  return {
    props: {
      jobList,
    }
  }
}

