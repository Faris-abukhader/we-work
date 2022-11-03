import React from 'react'
import Image from 'next/image'
export default function Location({location,textSize='text-sm',iconSize=15}) {
    return (
        <div className={`flex items-center justify-start space-x-2 text-gray-400 ${textSize}`}>
            <Image src={`/icons/location.svg`} width={iconSize} height={iconSize} alt='location' />
            <h4>{location}</h4>
        </div>
    )
}
