import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function WorkCard({ id,jobId, job,freelancer,isFreelancerAccept, createdAt, toggleReviewJobModal }) {
  return (
    <div className='border hover:border-2 hover:border-blue-700 hover:cursor-pointer hover:bg-gray-100 rounded-lg w-full p-4 shadow-inner'>
    <div className='flex justify-between items-center'>
      <div>
        <Link href={`/jobDetails?id=${jobId}`}>
      <h1 className='font-bold text-md sm:text-lg hover:text-blue-800'>Job : {job.title}</h1>
      </Link>
          <h1 className='font-bold text-sm'>to : {freelancer?.user?.firstName+' '+freelancer?.user?.lastName}</h1>
      </div>
      <div className='text-gray-600 space-y-2'>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 rounded-full w-[20px] h-[20px] hover:bg-gray-300 border border-blue-800" onClick={()=>toggleReviewJobModal(id)}>
          <Image src={'/icons/eye.svg'} width={16} height={16} alt='eye'/>
          </button>
        <h4 className='text-xs'>{new Date(createdAt).toDateString()}</h4>
        </div>
        <div className='flex items-center space-x-1'>
        <span className='text-xs'>freelancer status: </span>
        <div className={`${isFreelancerAccept ?'bg-green-500':'bg-red-500'} text-gray-100 text-center text-xs rounded-lg w-fit p-1`}>{isFreelancerAccept ? 'accept':'refuse'}</div>
        </div>
      </div>
    </div>
    </div>
  )
}
