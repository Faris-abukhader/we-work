import {useState} from 'react'
import SubNav from '../dashboard/SubNav'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanva'
export default function UserLayout({children,navBackgroundColor='',navHasAnimation=true,accountType='',current=''}) {
const [showOffcanvas,setShowOffcanvas] = useState(false)

const toggleOffcanvas = ()=>{
    setShowOffcanvas(!showOffcanvas)
}  
  return (
    <div className='w-full bg-transparent'>
      <Navbar customColor={navBackgroundColor} burgerHandler={toggleOffcanvas} hasAnimation={navHasAnimation} />
      <Offcanvas show={showOffcanvas}/>
      <div  className={`w-full min-h-screen py-10 px-2 md:px-20`}>
        <SubNav userAccountType={accountType} current={current}/>
      {children}
      </div>
      <Footer/>
    </div>
  )
}
