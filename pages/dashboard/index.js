import {useState} from 'react'
import { getSession } from "next-auth/react"
import Navbar from '../../components/general/Navbar'
import Offcanvas from '../../components/general/Offcanva'
import { signOut } from 'next-auth/react'
export default function Index() {
    const [showOffcanvas,setShowOffcanvas] = useState(false)

    const toggleOffcanvas = ()=>{
      setShowOffcanvas(!showOffcanvas)
    }
  
    return (
        <div className='w-full bg-transparent'>
      <Navbar burgerHandler={toggleOffcanvas}  />
      <Offcanvas show={showOffcanvas}/>
      <button className='m-20' onClick={signOut}>sign out</button>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (session) {
        console.log('session is here')
        console.log(session)
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

