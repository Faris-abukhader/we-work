import React from 'react'
import Image from 'next/image'
import TypeAndTimeLabels from '../general/TypeAndTimeLabels'
import Salary from '../general/Salary'
import Location from '../general/Location'
export default function JobTinyCard({jobTitle='Java Software Engineer',isLast=false,jobType,createdAt,location}) {
  return (
    <div className={`p-1 py-2 border-gray-100 ${!isLast && 'border-b-2'} hover:py-3 hover:cursor-pointer`}>
      <div className='flex space-x-2'>
        <div>
        <Image src={`/images/elon.webp`} className='rounded-lg' width={60} height={60} alt='logo'/>
        </div>
       <div className='w-full space-y-3'>
        <h1 className='font-bold'>{jobTitle}</h1>
        <TypeAndTimeLabels jobType={jobType} createdAt={createdAt}/>
        <div className='flex justify-between items-center'>
    <Salary salary={40} type={`Hour`}/>
    <Location location={location}/>
    </div>
       </div>
    </div>
    
    </div>
  )
}
