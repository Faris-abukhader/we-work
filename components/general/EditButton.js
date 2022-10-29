import React from 'react'
import Image from 'next/image'
export default function EditButton({clickHandler}) {
  return (
    <div onClick={()=>clickHandler()} className='hover:border-2 w-[30px] h-[30px] border-blue-600 rounded-full hover:cursor-pointer'>
    <Image src={`/icons/edit.svg`} width={30} height={30} alt='edit'/>
    </div>
  )
}
