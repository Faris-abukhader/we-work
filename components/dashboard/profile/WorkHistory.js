import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
export default function WorkHistory({employmentList=[]}) {
    console.log('!!!!!!!')
    console.log(employmentList)
  const languageList = useSelector((state)=>state.language)
  const [showAddModel,setShowAddModel] = useState(false)

  const toggleAddModel = ()=>{
    setShowAddModel(!showAddModel)
  }

  return (
    <div className='py-4'>
            <h1 className='text-xl '><b>Work history</b></h1>            
        {employmentList.length > 0 && employmentList.map((work,index)=><div key={index} className=''>
          <Link href={`/jobDetails?id=${work.hiringRequest?.job?.id}`}>
          <h1 className='hover:text-blue-700 hover:cursor-pointer'>{work.hiringRequest?.job?.title}</h1>
          </Link>
          <h1 className='text-sm text-gray-600'>for {work.hiringRequest?.owner?.user?.firstName+' '+work.hiringRequest?.owner?.user?.lastName}</h1>
          <h1 className='text-xs text-gray-600'>employer rate : {work.hiringRequest?.product?.employerRate??'no rate'} </h1>
          </div>)
        }
    </div>
  )
}
