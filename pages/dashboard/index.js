import {useState} from 'react'
import { getSession } from "next-auth/react"
import Navbar from '../../components/landingPage/Navbar'
import Offcanvas from '../../components/landingPage/Offcanva'
export default function Index() {
    const [showOffcanvas,setShowOffcanvas] = useState(false)

    const toggleOffcanvas = ()=>{
      setShowOffcanvas(!showOffcanvas)
    }
  
    return (
        <div className='w-full bg-transparent'>
      <Navbar burgerHandler={toggleOffcanvas}  />
      <Offcanvas show={showOffcanvas}/>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (session) {
        return {
            props: {}
        }
    } else {
        return {
            redirect: {
                destination: '/api/auth/signin'
            },
            props: {}
        }
    }
}

