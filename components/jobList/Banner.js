import React from 'react'
import Image from 'next/image'
import { SearchBar } from '../general/general'
export default function Banner({ jobNumber = 22 }) {
  return (
    <div className={`w-full h-[300px] px-2 flex justify-center my-4`} >
      <div style={{ background: '#f3f6fc' }} className={`w-full  rounded-lg relative p-3 text-center`}>
        <h1 className='text-4xl pb-5'><span className='text-blue-500'>{jobNumber} Jobs</span> Available Now</h1>
        <p className='text-sm text-gray-400 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
        <div className='absolute w-full md:bottom-1/2 bottom-10 md:translate-y-1/2 z-20'>
          <SearchBar hasBorder={false} />
        </div>
        <div className='absolute bottom-1 left-1  w-1/3 sm:w-1/6 z-10'>
          <Image src='/illustrations/jobList1.svg' width={90} height={90} layout='responsive' alt='avatar_1' />
        </div>
        <div className='absolute bottom-1 right-1  w-1/3 sm:w-1/6 z-10'>
          <Image src='/illustrations/jobList2.svg' width={90} height={90} layout='responsive' alt='avatar_2' />
        </div>
      </div>
    </div>
  )
}
