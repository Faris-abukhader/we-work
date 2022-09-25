import React from 'react'
import Image from 'next/image'
export default function TopPage() {
  return (
    <div style={{ backgroundImage: 'url("/images/mainPageBackground.jpeg")' }} className={`bg-csutomLightPink bg-no-repeat bg-center bg-cover w-full h-screen`}>
      <div className='bg-blue-400 bg-opacity-40 w-full h-screen flex justify-center items-center'>
        <div className='w-full sm:w-9/12  sm:px-0 text-center  sm:space-y-0'>
          <h1 className='text-5xl font-bold text-white animate__animated animate__fadeInDown animate__slower pb-8'>400+ Browse Jobs</h1>
          <div className='w-11/12 bg-gray-200 mx-auto rounded-md block sm:flex space-x-1 space-y-3 p-4 ring-8 ring-gray-50 ring-opacity-40 animate__animated animate__fadeInDown animate__slow'>
            <div className='flex w-full'>
            <Image src={`/icons/search.svg`} width={20} height={20} className='text-gray-500' alt='search' />
            <input className='bg-transparent text-lg font-bold px-1 hover:border-none focus:border-none hover:outline-none focus:outline-none w-full border-none sm:border-r border-gray-300' placeholder='Job Title or Keywords' />
            </div>
            <div className='flex'>
            <div className='border-r border-gray-300 px-3'>
              <button className='bg-blue-500 p-2 rounded-md text-gray-300'>Search</button>
            </div>
            <div className='pl-3'>
              <button className='bg-blue-500 p-2 rounded-md text-gray-300'>Search</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
