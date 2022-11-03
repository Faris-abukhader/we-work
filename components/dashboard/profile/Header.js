import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {Location, ModifyButton} from '../../general/general'
import {PickerAvatarModel} from '../../dashboard/profile/profile'
import Link from 'next/link'
export default function Header({id,firstName,lastName,avatar,currentLocation,freelancer,isReview=false}) {
  const [showPickerModel,setShowPickerModel] = useState(false)
  const [profileImage,setProfileImage] = useState(avatar)

  const toggleShowPickerModel = ()=>{
    setShowPickerModel(!showPickerModel)
  }
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <div className='relative'>
            {!isReview &&  <div className='absolute bg-gray-50 rounded-full top-0 left-0 z-20'>
              <ModifyButton onClick={toggleShowPickerModel}/>
            </div>}
           
          <Image className='rounded-full' src={`/avatar/${profileImage}`} width={80} height={80} alt='avatar'/>
          </div>
            <div>
                <h1 className='font-bold text-lg sm:text-2xl '>{firstName+' '+lastName}</h1>
                <Location location={currentLocation}/>
                <p className='text-xs text-gray-500 pt-1'>{freelancer.shortIntro}</p>
            </div>

        </div>
        <div>
          {!isReview && <Link href={`/profile?id=${id}`}>
            <button className='text-sm sm:text-md px-4 py-2 rounded-3xl w-fit border-2 border-blue-600 hover:bg-gray-100 hover:cursor-pointer text-blue-700 hover:text-blue-800'>See Public View</button>
            </Link>}
          
        </div>
        {!isReview &&<PickerAvatarModel show={showPickerModel} toggle={toggleShowPickerModel} data={avatar} updateAvatar={setProfileImage}/>}
    </div>
  )
}
