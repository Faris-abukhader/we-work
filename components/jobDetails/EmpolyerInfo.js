import React from 'react'
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function EmpolyerInfo({ownerName='AliThemes',location='Amman,Jordan',totalJob=5,avatar}) {
    const defaultProps = {
        center: {
          lat: 31.934946,
          lng: 36.150286
        },
        zoom: 11
      };
    
  return (
    <div className='w-full  border-2 border-gray-100 rounded-md p-3'>
        <div className='flex justify-start space-x-3 py-8 border-b'>
            <Image className='rounded-xl p-1' src={`/avatar/${avatar}`} width={60} height={60} alt='owner_image'/>
          <div className=' grid grid-row-3 items-center'>
            <h1 className='text-lg font-bold'>{ownerName}</h1>
            <h2 className='text-sm flex items-center'>
                <Image src={`/icons/location.svg`} width={15} height={15} alt='location'/>
                <span>{location}</span></h2>
            <h2 className='underline text-blue-500 text-xs px-1'>{totalJob} Open jobs</h2>
          </div>
        </div>
        <div className='py-4 w-full h-[250px] rounded-md'>
    <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      <AnyReactComponent
          lat={31.934946}
          lng={36.150286}
          text={ownerName}
        />
      </GoogleMapReact>
      </div>
      <ul className='text-gray-500 text-sm marker:text-sky-400 list-disc px-3'>
        <li>205 North Shawerma street, Suite 810 Amman, 60601, Jordan</li>
        <li>Phone: (962) 456-7890</li>
        <li>Email: Faris@yahoo.com</li>
      </ul>
    </div>
  )
}
