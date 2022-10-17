import React from 'react'
import Image from 'next/image'
export default function InfoAttribute({icon,attribute,value}) {
  return (
    <div className='flex space-x-4 items-start justify-start h-[25px] overflow-hidden'>
        <Image src={`/icons/${icon}`} width={20} height={20} alt='icon'/>
        <h2 className='text-gray-500'>{attribute}</h2>
        <h1 className='text-lg'>{value}</h1>
    </div>
  )
}
