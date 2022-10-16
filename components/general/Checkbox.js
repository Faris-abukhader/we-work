import { useState } from 'react'
import Image from 'next/image'
export default function Checkbox({checked=false,label,num=1000,showNum=true}) {
  const [isChecked,setIsChecked] = useState(checked)
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-3 text-gray-500'>
          <span onClick={()=>setIsChecked(!isChecked)} className={`w-6 h-6 flex justify-center items-center rounded-lg border border-gray-300 cursor-pointer ${isChecked?'bg-blue-500':'bg-gray-200'}`}>
            {isChecked &&<Image src={`/icons/check.svg`} width={20} height={20} alt='checked'/>}
          </span>
        <label>{label}</label>
        </div>
        {showNum &&<span className='bg-blue-200 text-blue-700 rounded-lg flex items-center justify-center min-w-[30px] h-[30px] px-1'>{num}</span>}
    </div>
  )
}
