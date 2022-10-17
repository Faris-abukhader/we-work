import React from 'react'
import Image from 'next/image'
export default function JobHeader({jobTitle='Senior Full Stack Engineer, Creator Success Full Time',jobType='Full time',createdAt='2h ago'}) {
  return (
    <div className='w-full pb-14 border-b-2 border-gray-100'>
        <img src={`/images/jobBanner.png`} className='w-full h-[300px] rounded-md' alt='jobBanner'/>
        <div className='flex-row space-y-3 md:space-y-0 md:flex justify-start md:justify-between pt-8'>
            <h1 className='text-3xl font-bold'>{jobTitle}</h1>
            <button className='p-3 flex justify-center items-center space-x-1 bg-blue-600 rounded-md text-white hover:bg-blue-700 hover:border'>
                <Image src={`/icons/patchCheck.svg`} width={18} height={18} alt='patchCheck'/>
                <span>Apply Now</span>
            </button>
        </div>
        <div className='flex space-x-1 items-center text-gray-400 text-sm'>
            <Image src={`/icons/briefCase.svg`} width={15} height={15} alt='briefCase'/>
            <span className='pr-2'>{jobType}</span>
            <Image src={`/icons/clock.svg`} width={15} height={15} alt='briefCase'/>
            <span>{createdAt}</span>
        </div>
    </div>
  )
}
