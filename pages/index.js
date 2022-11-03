import { useState } from 'react'
import Navbar from '../components/layout/components/Navbar'
import Offcanvas from '../components/layout/components/Offcanva'
import TopPage from '../components/landingPage/TopPage'
import Technology from '../components/landingPage/Technology'
import HowItWorks from '../components/landingPage/HowItWorks'
import ClientReview from '../components/landingPage/ClientReview'
import SignUpSection from '../components/landingPage/SignUpSection'
import PopularCategories from '../components/landingPage/PopularCategories'
import Footer from '../components/layout/components/Footer'
export default function Home() {
  const [showOffcanvas,setShowOffcanvas] = useState(false)
  const toggleOffcanvas = ()=>{
    setShowOffcanvas(!showOffcanvas)
  }
  return (
     <div className='w-full bg-transparent'>
      <Navbar burgerHandler={toggleOffcanvas} customColor='bg-gray-400 bg-opacity-60'/>
      <Offcanvas show={showOffcanvas}/>
      <TopPage/>
      <Technology/>
      <HowItWorks/>
      <ClientReview/>
      <SignUpSection/>
      <PopularCategories/>
      <Footer/>
     </div>
  )
}
