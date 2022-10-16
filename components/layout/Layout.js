import {useState} from 'react'
import Navbar from '../general/Navbar'
import Offcanvas from '../general/Offcanva'
export default function Layout({children,navBackgroundColor='',navHasAnimation=true}) {
const [showOffcanvas,setShowOffcanvas] = useState(false)

const toggleOffcanvas = ()=>{
    setShowOffcanvas(!showOffcanvas)
}  
  return (
    <div className='w-full bg-transparent'>
      <Navbar customColor={navBackgroundColor} burgerHandler={toggleOffcanvas} hasAnimation={navHasAnimation} />
      <Offcanvas show={showOffcanvas}/>
      <div  className={`w-full h-screen py-28 px-2 md:px-20`}>
      {children}
      </div>
    </div>
  )
}
