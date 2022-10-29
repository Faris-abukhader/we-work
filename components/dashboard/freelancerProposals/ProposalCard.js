import React from 'react'
import Link from 'next/link'
export default function ProposalCard({id,job,bid,createdAt,isAccepted,isDecline,toggleReviewJobModal}) {
  return (
    <div onClick={()=>toggleReviewJobModal(id)} className='flex justify-between items-center border hover:border-2 hover:border-blue-700 hover:cursor-pointer hover:bg-gray-100 rounded-lg w-full p-4 shadow-inner'>
      <div>
        <Link href={`/jobDetails?id=${id}`} >
          <h1 className='font-bold text-lg hover:text-blue-800'> Job : {job.title}</h1>
        </Link>
        <h5 className='text-xs text-gray-700'>Bid : {bid}</h5>
      </div>
      <div className='text-gray-600 space-y-2'>
        <h1>Status : {(!isAccepted && !isDecline ? 'Pending':(isAccepted ? 'Accepted':'Declined'))}</h1>
        <h4 className='text-xs'>created at :{new Date(createdAt).toLocaleTimeString()}</h4>
      </div>
    </div>
  )
}
