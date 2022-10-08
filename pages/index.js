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
import FloatingImage from '../components/landingPage/FloatingImage'

export default function Home() {
  const [showOffcanvas,setShowOffcanvas] = useState(false)

  const toggleOffcanvas = ()=>{
    setShowOffcanvas(!showOffcanvas)
  }
  return (
    <div className='w-full bg-transparent'>
      <Navbar burgerHandler={toggleOffcanvas}  />
      <Offcanvas show={showOffcanvas}/>
      <TopPage/>
      <Technology/>
      <HowItWorks/>
      <ClientReview/>
      <SignUpSection/>
      <PopularCategories/>
      {/* <div className='relative   w-[500px]'>
        <div className='absolute w-[230px] h-[230px] rounded-full bg-gray-400 bg-opacity-50 top-20 right-10'></div>
        <div className='absolute w-[200px] h-[200px] rounded-full bg-gray-400 bg-opacity-50 top-0'></div>
        <div className='absolute w-[100px] h-[100px] rounded-full bg-gray-400 bg-opacity-50 bottom-14 left-10'></div>
        <div className='absolute w-[100px] h-[100px] rounded-full bg-gray-400 bg-opacity-50 bottom-10 right-10'></div>
        <div className=' w-[400px] relative'>
          <div className='flex justify-between'>
          <FloatingImage floatingY={true} image={`/images/bezos.webp`} width={150} height={150} position={`pt-10`}/>  
        <FloatingImage floatingY={false} image={`/images/elon.webp`} position={`pt-5`}/>
          </div>
          <div className='flex items-center justify-center'>
          <FloatingImage floatingY={true} width={180} height={180} image={`/images/gates.webp`} position={`-px-5 -py-5`} />
          </div>
          <div className='flex justify-between'>
          <FloatingImage floatingY={false} image={`/images/mainPageBackground.jpeg`} position={`pt-10`} />  
        <FloatingImage floatingY={true} image={`/images/elon.webp`} width={90} height={90} position={`pb-10`}/>
          </div>
        </div>
       </div> */}

    </div>
  )
}
