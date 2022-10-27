import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
export default function Navbar({ burgerHandler,customColor='',hasAnimation=true }) {

  const [backgroundColor, setBackgroundColor] = useState('')
  const [position,setPosition] = useState(1)
  const session = useSession()

  const changeBackground = () => {
    if (window.pageYOffset >= 120) {
      setBackgroundColor('shadow-xl')
      setPosition(2)
    } else {
      setBackgroundColor('')
      setPosition(1)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <div style={{backdropFilter: 'blur(10px)',/*backgroundColor:customColor.length>0 && customColor*/}} className={`w-full bg-white ${position==1 ? 'static':'sticky'} top-0 p-3 py-5 ${backgroundColor} z-30`}>
        <div className={`blur-0 flex justify-between items-center text-gray-800`}>
        <div name='pageName' className={`flex items-center text-3xl font-bold ${hasAnimation && 'animate__animated'} animate__fadeInLeft animate__slow`}>
          <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo'/>
          <div>e work</div>
        </div>
        <div className='hidden md:block'>
            <ul className={`flex space-x-6 ${hasAnimation && 'animate__animated'}`}>
                <li className={`hover:text-blue-500 hover:cursor-pointer hover:scale-110 ${hasAnimation && 'animate__animated'} animate__fadeInLeft  animate__slower`}>Home</li>
                <Link href={`/jobList`}><li className={`hover:text-blue-500 hover:cursor-pointer hover:scale-110 ${hasAnimation && 'animate__animated'}  animate__fadeInDown animate__slower`}>Job list</li></Link>
               { session.data && <Link href={`/dashboard`}><li className={`hover:text-blue-500 hover:cursor-pointer hover:scale-110 ${hasAnimation && 'animate__animated'}  animate__fadeInRight animate__slower`}>Dashboard</li></Link>}            
            </ul>
        </div>
        {
          session.data ? 
          <a onClick={signOut} className={`${hasAnimation && 'animate__animated'}  animate__fadeInRight animate__slow hidden md:block py-3 px-4 rounded-md outline  bg-blue-800 text-xs text-white hover:cursor-pointer hover:bg-blue-900`}>Sign out</a>
            :
          <Link href={`/auth/signIn`}><a className={`${hasAnimation && 'animate__animated'}  animate__fadeInRight animate__slow hidden md:block py-3 px-4 rounded-md  bg-blue-800 text-xs text-white hover:cursor-pointer hover:bg-blue-900`}>Sign in</a></Link>
        }
        <button  onClick={()=>burgerHandler()} className=' md:hidden appearance-none ring-0.7 ring-blue-600 rounded-md w-[25px] h-[25px] flex justify-center items-center'>
            <Image id='burger_button' src={`/icons/list.svg`} width={20} height={20} alt='burger'/>
        </button>
        </div>
    </div>
  )
}
