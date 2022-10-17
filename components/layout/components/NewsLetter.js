import React from 'react'
import Image from 'next/image'
export default function NewsLetter() {
  return (
        <div  style={{background:'url("/illustrations/newsLetterBackground.svg")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='w-full flex items-center justify-center h-[350px] rounded-2xl py-10 px-6 md:px-20' >
            <div className='space-y-8'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center text-white'>New Things Will Always Update Regularly</h1>
            <div className='bg-white p-4 flex items-center rounded-xl'>
              <Image src={`/icons/email.svg`} width={35} height={35} alt='email'/>
              <input className={`appearance-none w-full border-none  focus:outline-none focus:border-none disabled:bg-white  px-3 py-2 m-0 text-black  bg-transparent  p-1 text-xl`} placeholder='Enter your email here...'/>
              <button className='p-3 w-[180px] h-[60px] flex justify-center items-center space-x-1 bg-blue-600 rounded-md text-white hover:bg-blue-700 hover:border'>
                <Image src={`/icons/patchCheck.svg`} width={18} height={18} alt='patchCheck'/>
                <span>Subscribe</span>
            </button>
            </div>
            </div>
    </div>
  )
}
