import Link from 'next/link'
import { CustomToggleButton, Location, Salary } from '../../general/general'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import {ProposalList} from './allWorks'
export default function WorkCard({ id, title,proposalList, location, salary, isClosed, createdAt, _count, toggleReviewJobModal, token }) {
  const [showProposal,setShowProposal] = useState(false)

  const toggleJob = async (checked) => {
    console.log(id, checked)
    await axios.put(`${process.env.API_URL}/job/toggle`, { id, isClosed: checked }, { headers: { token } })
  }
  return (
    <div className='border hover:border-2 hover:border-blue-700 hover:cursor-pointer hover:bg-gray-100 rounded-lg w-full p-4 shadow-inner'>
    <div className='flex justify-between items-center'>
      <div onClick={()=>toggleReviewJobModal(id)} >
        <Link href={`/jobDetails?id=${id}`} >
          <h1 className='font-bold text-lg hover:text-blue-800'>{title}</h1>
        </Link>
        <div className='flex space-x-2'>
          <Location location={location} />
          <Salary salary={salary} type={`Hour`} />
        </div>
      </div>
      <div className='text-gray-600 space-y-2'>
        <h1 onClick={()=>{if(_count.proposalList>0){setShowProposal((prevs)=>!prevs)}}}>Proposals : {_count.proposalList} {_count.proposalList>0 && <Image src={`/icons/chevron${showProposal?'Up':'Down'}.svg`} width={15} height={15} alt='chevron'/>}</h1>
        <h4 className='text-xs'>{new Date(createdAt).toDateString()}</h4>
        <CustomToggleButton initalValue={!isClosed} label={`close`} handler={toggleJob} />
      </div>
    </div>
    {showProposal && <ProposalList data={proposalList}/>}
    </div>
  )
}
