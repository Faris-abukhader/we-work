import React from 'react'
import Image from 'next/image'
export default function DeclineButton({clickHandler,width=30,height=30}) {
  return (
    <div onClick={()=>clickHandler()} className={`hover:border-2 w-[${width+5}px] h-[${height+5}px] p-0 m-0 border-red-600 flex items-center justify-center rounded-full hover:cursor-pointer`}>
    <Image src={`/icons/cancel.svg`} width={width} height={height} alt='edit'/>
    </div>
  )
}
