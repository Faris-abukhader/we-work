import {useState} from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanva'
export default function Layout({children,navBackgroundColor='',navHasAnimation=true}) {
const [showOffcanvas,setShowOffcanvas] = useState(false)

const toggleOffcanvas = ()=>{
    setShowOffcanvas(!showOffcanvas)
}  
  return (
    <div className='w-full bg-transparent'>
      <Navbar customColor={navBackgroundColor} burgerHandler={toggleOffcanvas} hasAnimation={navHasAnimation} />
      <Offcanvas show={showOffcanvas}/>
      <div  className={`w-full min-h-screen py-28 px-2 md:px-20`}>
      {children}
      </div>
      <Footer/>
    </div>
  )
}
