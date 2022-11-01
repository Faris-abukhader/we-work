import React from 'react'
import Image from 'next/image'
import {Location} from '../../general/general'
export default function Header({firstName,lastName,avatar,currentLocation}) {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
            <Image className='rounded-full' src={`/avatar/${avatar}`} width={80} height={80} alt='avatar'/>
            <div>
                <h1 className='font-bold text-lg sm:text-2xl '>{firstName+' '+lastName}</h1>
                <Location location={currentLocation}/>
            </div>

        </div>
        <div>
            <button className='text-sm sm:text-md px-4 py-2 rounded-3xl w-fit border-2 border-blue-600 hover:bg-gray-100 hover:cursor-pointer text-blue-700 hover:text-blue-800'>See Public View</button>
        </div>
    </div>
  )
}
