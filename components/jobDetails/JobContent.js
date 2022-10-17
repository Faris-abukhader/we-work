import React from 'react'

export default function JobContent({jobDescription=''}) {
  return (
    <div className='w-full'>
        <div className=' p-8'>
            <h1 className='text-2xl font-bold py-4'>Job description</h1>
            <p>{jobDescription}</p>
        </div>
    </div>
  )
}
