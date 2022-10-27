import React from 'react'
import Image from 'next/image'
import TypeAndTimeLabels from '../general/TypeAndTimeLabels'
import { useSession } from 'next-auth/react'
export default function JobHeader({jobTitle='Senior Full Stack Engineer, Creator Success Full Time',jobType='Full time',createdAt='2h ago'}) {
  const session = useSession()
  return (
    <div className='w-full pb-14 border-b-2 border-gray-100'>
        <img style={{objectFit:'cover'}} src={`/images/jobBanner.png`} className='w-full h-[400px] rounded-2xl' alt='jobBanner'/>
        <div className='flex-row space-y-3 md:space-y-0 md:flex justify-start md:justify-between pt-8'>
            <h1 className='text-3xl font-bold'>{jobTitle}</h1>
            {session.data?.user?.accountType != 'e' && <button className='p-3 flex justify-center items-center space-x-1 bg-blue-600 rounded-md text-white hover:bg-blue-700 hover:border'>
                <Image src={`/icons/patchCheck.svg`} width={18} height={18} alt='patchCheck'/>
                <span>Apply Now</span>
            </button>}
        </div>
        <TypeAndTimeLabels jobType={jobType} createdAt={createdAt}/>
    </div>
  )
}
