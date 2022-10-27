import React from 'react'
import Salary from '../../general/Salary'
import Location from '../../general/Location'
import Link from 'next/link'
import CustomToggleButton from '../../general/CustomToggleButton'
import axios from 'axios'
export default function WorkCard({id,title,location,salary,isClosed,createdAt,_count,toggleReviewJobModal,token}) {

  const toggleJob = async(checked)=>{
    console.log(id,checked)
    await axios.put(`${process.env.API_URL}/job/toggle`,{id,isClosed:checked},{headers:{token}})
  }
  return (
      <div onClick={()=>toggleReviewJobModal(id)} className='flex justify-between items-center border hover:border-2 hover:border-blue-700 hover:cursor-pointer hover:bg-gray-100 rounded-lg w-full p-4 shadow-inner'>
      <div>
      <Link href={`/jobDetails?id=${id}`} >
        <h1 className='font-bold text-lg hover:text-blue-800'>{title}</h1>
        </Link>
        <div className='flex space-x-2'>
        <Location location={location}/>
        <Salary salary={salary} type={`Hour`}/>
        </div>
      </div>
      <div className='text-gray-600 space-y-2'>
      <h1>Proposals : {_count.proposalList}</h1>
       <h4 className='text-xs'>{new Date(createdAt).toLocaleTimeString()}</h4>
       <CustomToggleButton initalValue={!isClosed} label={`close`} handler={toggleJob}/>
      </div>
      </div>
  )
}
