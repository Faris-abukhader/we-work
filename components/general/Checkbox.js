import React from 'react'

export default function Checkbox({isChecked}) {
  return (
    <div className='flex'>
        <input type={`checkbox`}/>
        <label>{label}</label>
    </div>
  )
}
