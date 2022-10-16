import React from 'react'
import Image from 'next/image'
export default function JobCard({ownerAvatar='elon.webp',owner='Bing Search',location='Amman,Jordan',popularKey='ReactJs',jobTitle='React Software Engineer',jobType='Full time',createdAt='6 mins ago',salary=250}) {
  return (
    <div className={`w-full min-h-[200px] p-5 rounded-md bg-blue-100 bg-opacity-50 cursor-pointer border hover:bg-white`}>
        <div className={`flex justify-between items-start pb-3`}>
            <div className='flex space-x-4'>
                <Image className='rounded-lg' src={`/images/${ownerAvatar}`} width={70} height={70} alt='profile'/>
                <div className='text-start'>
                    <h1 className='text-xl font-bold'>{owner}</h1>
                    <div className='flex items-center justify-start space-x-2 text-gray-400 text-sm'>
                        <Image src={`/icons/location.svg`} width={15} height={15} alt='location'/>
                    <h4>{location}</h4>
                    </div>
                </div>
            </div>
            <div className='py-1 px-2 bg-blue-100 rounded-md'>{popularKey}</div>
        </div>
        <h1 className='font-bold text-3xl pb-1'>{jobTitle}</h1>
        <div className='flex space-x-1 items-center text-gray-400 text-sm'>
            <Image src={`/icons/briefCase.svg`} width={15} height={15} alt='briefCase'/>
            <span className='pr-2'>{jobType}</span>
            <Image src={`/icons/clock.svg`} width={15} height={15} alt='briefCase'/>
            <span>{createdAt}</span>
        </div>
        <p className='text-sm text-gray-600 py-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.
        </p>
        <div className='flex justify-between items-center'>
            <div className='text-gray-500'><b className='text-blue-500'>${salary}</b>/Hour</div>
            <div className='bg-blue-400 px-2 py-1 rounded-md text-blue-800 hover:text-white hover:bg-blue-900 cursor-pointer'>Apply Now</div>
        </div>
    </div>
  )
}
