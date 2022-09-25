import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/landingPage/Navbar'
import Offcanvas from '../components/landingPage/Offcanva'
import TopPage from '../components/landingPage/TopPage'
import Technology from '../components/landingPage/Technology'
import HowItWorks from '../components/landingPage/HowItWorks'
import ClientReview from '../components/landingPage/ClientReview'
import SignUpSection from '../components/landingPage/SignUpSection'
import PopularCategories from '../components/landingPage/PopularCategories'

export default function Home() {
  const [showOffcanvas,setShowOffcanvas] = useState(false)

  const toggleOffcanvas = ()=>{
    setShowOffcanvas(!showOffcanvas)
  }
  return (
    <div className='w-full'>
      <Navbar burgerHandler={toggleOffcanvas}  />
      <Offcanvas show={showOffcanvas}/>
      <TopPage/>
      <Technology/>
      <HowItWorks/>
      <ClientReview/>
      <SignUpSection/>
      <PopularCategories/>

    </div>
  )
}
