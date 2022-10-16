import Banner from '../../components/jobList/Banner'
import JobCard from '../../components/jobList/JobCard'
import SearchFilter from '../../components/jobList/SearchFilter'
import SortingBar from '../../components/jobList/SortingBar'
import Layout from '../../components/layout/Layout'
export default function Index() {
  return (
   <Layout navBackgroundColor='#000' navHasAnimation={false}>
    <Banner/>
    <div className='flex space-x-2'>
        <div className='hidden lg:block w-1/4'>
        <SearchFilter/>
        </div>
        <div className='w-full'>
          <SortingBar/>
          <div className='w-full p-3 space-y-3'>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          </div>
        </div>
    </div>
   </Layout>
  )
}
