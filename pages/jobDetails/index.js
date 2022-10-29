import {EmploymentInfo,EmpolyerInfo,JobContent,JobHeader,SimilarJobs} from '../../components/jobDetails/jobDetails'
import Layout from '../../components/layout/Layout'
import { wrapper } from '../../store/store'
import axios from 'axios'
export default function Index({job,simpilarJobs}) {
  console.log(job)
  return (
    <Layout navBackgroundColor='#000' navHasAnimation={false}>
       <JobHeader jobTitle={job.title}/>
       <div className='w-full py-8 flex-row md:flex  grow-0 md:space-x-3'>
        <div className='w-full space-y-3'>
        <EmploymentInfo location={job.location} category={job.jobCategory} salary={job.salary}/>
        <JobContent jobDescription={job.description}/>
        </div>
        <div className='w-full md:w-1/3 space-y-3'>
        <EmpolyerInfo ownerName={job.employer?.user?.firstName+' '+job.employer?.user?.lastName} avatar={job.employer?.user?.avatar}/> 
         <SimilarJobs data={simpilarJobs}/>
        </div>
       </div>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const {id} = ctx.query
  try{
    const jobRequest = await axios.get(`${process.env.API_URL}/job/${id}`)
    const targetJob = jobRequest.data
    const simpilarJobs = await (await axios.get(`${process.env.API_URL}/job/search?category=${targetJob.jobCategory}&name=`)).data.data
     console.log(targetJob)
    if(targetJob.id){
      return {
        props: {
          job:targetJob,
          simpilarJobs,
        }
      }
    }
  }catch(err){
    console.log(err)
    return {
      redirect: {
          destination: '/jobList'
      },
      props: {}
   }
  }
})


