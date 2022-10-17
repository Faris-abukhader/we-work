import React from 'react'

export default function Salary({salary,type}) {
  return (
    <div className='text-gray-500'><b className='text-blue-500'>${salary}</b>/{type}</div>
  )
}
