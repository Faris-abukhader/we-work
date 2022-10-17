import React from 'react'
import JobTinyCard from './JobTinyCard'

export default function SimilarJobs() {
    return (
        <div className='w-full border-2 border-gray-100 rounded-md p-3'>
            <h1 className='text-lg pb-4 border-b-2 border-gray-100'>Similar jobs</h1>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`}/>
            <JobTinyCard jobType={`Full time`} createdAt={`3 mins ago`} location={`Amman,Jordan`} isLast={true}/>
        </div> 
    )
}
