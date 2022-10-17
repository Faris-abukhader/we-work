import React from 'react'
import Image from 'next/image'
export default function TypeAndTimeLabels({jobType,createdAt}) {
  return (
    <div className='flex space-x-1 items-center text-gray-400 text-sm'>
            <Image src={`/icons/briefCase.svg`} width={15} height={15} alt='briefCase'/>
            <span className='pr-2'>{jobType}</span>
            <Image src={`/icons/clock.svg`} width={15} height={15} alt='briefCase'/>
            <span>{createdAt}</span>
        </div>
  )
}
