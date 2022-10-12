import Banner from '../../components/jobList/Banner'
import SearchFilter from '../../components/jobList/SearchFilter'
import Layout from '../../components/layout/Layout'
export default function Index() {
  return (
   <Layout navBackgroundColor='#000' navHasAnimation={false}>
    <Banner/>
    <div className='flex'>
        <div className='hidden md:block w-1/4'>
        <SearchFilter/>
        </div>

    </div>
   </Layout>
  )
}
