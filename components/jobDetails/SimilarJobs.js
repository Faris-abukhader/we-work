import React from 'react'
import JobTinyCard from './JobTinyCard'

export default function SimilarJobs({data}) {
    return (
        <div className='w-full border-2 border-gray-100 rounded-md p-3'>
            <h1 className='text-lg pb-4 border-b-2 border-gray-100'>Similar jobs</h1>
            {data && data.map((job,index)=><JobTinyCard id={job.id} isLast={data.length==index+1} key={job.id} jobTitle={job.title} avatar={job.employer?.user?.avatar} jobType={`Full time`} createdAt={`${Math.ceil(Math.random()*20+3)} mins ago`} salary={job.salary} location={job.location}/>)}
        </div> 
    )
}
