import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
export default function Navbar({ burgerHandler,customColor='',hasAnimation=true }) {

  const [backgroundColor, setBackgroundColor] = useState('')
  const session = useSession()

  const changeBackground = () => {
    if (window.pageYOffset >= 120) {
      setBackgroundColor('bg-gray-800')
    } else {
      setBackgroundColor('bg-gray-600 bg-opacity-20')
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <div style={{backdropFilter: 'blur(10px)',backgroundColor:customColor.length>0 && customColor}} className={`w-full fixed top-0 p-3 py-5 ${backgroundColor} z-30`}>
        <div className='blur-0 flex justify-between items-center text-gray-100'>
        <div name='pageName' className={`flex items-center text-3xl font-bold ${hasAnimation && 'animate__animated'} animate__fadeInLeft animate__slow`}>
          <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo'/>
          <div>e work</div>
        </div>
        <div className='hidden md:block'>
            <ul className={`flex space-x-6 ${hasAnimation && 'animate__animated'}`}>
                <li className={`hover:text-blue-500 hover:cursor-pointer hover:scale-110 ${hasAnimation && 'animate__animated'} animate__fadeInLeft  animate__slower`}>Home</li>
                <Link href={`/jobList`}><li className={`hover:text-blue-500 hover:cursor-pointer hover:scale-110 ${hasAnimation && 'animate__animated'}  animate__fadeInDown animate__slower`}>Job list</li></Link>
               { session && <Link href={`/dashboard`}><li className={`hover:text-blue-500 hover:cursor-pointer hover:scale-110 ${hasAnimation && 'animate__animated'}  animate__fadeInRight animate__slower`}>Dashboard</li></Link>}            </ul>
        </div>
        {
          session ? 
          <a onClick={signOut} style={{backdropFilter: 'blur(10px)'}} className={`${hasAnimation && 'animate__animated'}  animate__fadeInRight animate__slow hidden md:block bg-opacity-40 p-1 px-4 rounded-md outline outline-offset-1 outline-gray-500 bg-blue-800 text-xs text-white hover:cursor-pointer  hover:outline-gray-600`}>Sign out</a>
            :
          <Link href={`/auth/signIn`}><a style={{backdropFilter: 'blur(10px)'}} className={`${hasAnimation && 'animate__animated'}  animate__fadeInRight animate__slow hidden md:block bg-opacity-40 p-1 px-4 rounded-md outline outline-offset-1 outline-gray-500 bg-blue-800 text-xs text-white hover:cursor-pointer  hover:outline-gray-600`}>Sign in</a></Link>
        }
        <button  onClick={()=>burgerHandler()} className=' md:hidden appearance-none ring-0.7 ring-blue-400 rounded-md w-[25px] h-[25px] flex justify-center items-center'>
            <Image id='burger_button' src={`/icons/list.svg`} width={20} height={20} alt='burger'/>
        </button>
        </div>
    </div>
  )
}
