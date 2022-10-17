import React from 'react'
import Image from 'next/image'
export default function Location({location}) {
    return (
        <div className='flex items-center justify-start space-x-2 text-gray-400 text-sm'>
            <Image src={`/icons/location.svg`} width={15} height={15} alt='location' />
            <h4>{location}</h4>
        </div>
    )
}
