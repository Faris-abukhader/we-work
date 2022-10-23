import React from 'react'

export default function AddNewButton({title,hasHandler=true,handler}) {
  const clickHandler = ()=>{
    if(hasHandler){
      handler()
    }
  }
  return (
    <div onClick={clickHandler} className={`bg-customDarkPurple text-gray-100 text-sm  px-2 py-1 rounded-md hover:scale-105 transition-transform hover:cursor-pointer hover:shadow-md`}>{title}</div>
  )
}
