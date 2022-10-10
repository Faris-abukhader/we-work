import { useEffect, useState,useRef } from 'react';
import Image from 'next/image';
import {  useSession,signOut } from 'next-auth/react';
import Link from 'next/link';
export default function Offcanvas({show}) {
  const session = useSession()
  console.log(session)
  const offcanvasRef = useRef(null)

    return (
      <div ref={offcanvasRef}  style={{backdropFilter: 'blur(20px)'}}  className={`offcanvas z-50 bg-gray-600 bg-opacity-60 offcanvas-start fixed bottom-0 flex flex-col w-1/2 max-w-md ${show ? 'flex':'hidden'} bg-clip-padding shadow-xl outline-none text-gray-700 after:duration-1000 top-0 left-0' border-none animate__animated animate__fast ${show ? 'animate__fadeInLeft':'animate__fadeOutLeft'} `}>
      <div  className="offcanvas-body  flex-grow overflow-y-auto scrollbar-hide ">
      <div className='relative pb-4 '>
        <div className='flex w-full pt-3 items-center justify-center text-center text-3xl font-bold text-gray-100'>
          <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo'/>
          <div>e work</div>
        </div>
        <hr className={`text-gray-100 my-3`}/>
            </div>
            <div className='flex flex-col pt-3 cursor-pointer text-center space-y-6 text-gray-100'>
                <a className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Home</a> 
                <a className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Job List</a>
                <a className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Dashboard</a>
                {session.data?.user?.email ?
                  <a onClick={signOut} className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Sign out</a>
                   :
                   <Link href={`/auth/signIn`}><a className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Sign in</a></Link>
                }
                {!session.data && <a className={`hover:text-gray-400 hover:font-bold border-b pb-3 border-gray-500`}>Register</a>}
            </div>
      </div>
    </div>
        )
  }
  