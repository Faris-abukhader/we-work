import { useState } from 'react'
import Image from 'next/image'
import Salary from '../general/Salary'
import Location from '../general/Location'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
export default function JobCard({id,ownerAvatar='elon.webp',owner='Bing Search',location='Amman,Jordan',description='',popularKey='ReactJs',jobTitle='React Software Engineer',jobType='Full time',createdAt='6 mins ago',salary=250 ,handleApplyButton,propsals=0}) {
  const session = useSession()
    return (    
    <div className={`w-full min-h-[200px] p-5 rounded-md bg-blue-100 bg-opacity-50 cursor-pointer border hover:bg-white`}>
        <div className={`flex justify-between items-start pb-3`}>
            <div className='flex space-x-4'>
                <Image className='rounded-lg' src={`/avatar/${ownerAvatar}`} width={70} height={70} alt='profile'/>
                <div className='text-start'>
                    <h1 className='text-lg font-bold'>{owner}</h1>
                    <Location location={location}/>
                </div>
            </div>
            <div className='py-1 px-2 bg-blue-100 rounded-md'>{popularKey}</div>
        </div>
        <Link href={`/jobDetails?id=${id}`}>
        <h1 className='font-bold text-3xl pb-1 hover:text-blue-800'>{jobTitle}</h1>
        </Link>
        <div className='flex space-x-1 items-center text-gray-400 text-sm'>
            <Image src={`/icons/briefCase.svg`} width={15} height={15} alt='briefCase'/>
            <span className='pr-2'>{jobType}</span>
            <Image src={`/icons/clock.svg`} width={15} height={15} alt='briefCase'/>
            <span>{createdAt}</span>
        </div>
        <p className='text-sm text-gray-600 py-8'>{description}</p>
        <div className='flex justify-between items-center'>
            <div>
            <Salary salary={salary} type={`Hour`}/>
            <p className='text-xs text-gray-500'>proposals : <b>{propsals}</b></p>
            </div>
            {(session.data?.user?.accountType == 'f' || !session.data )&& <div onClick={()=>handleApplyButton(id)} className='bg-blue-400 px-2 py-1 rounded-md text-blue-800 hover:text-white hover:bg-blue-900 cursor-pointer'>Apply Now</div>}
        </div>
    </div>
  )
}
