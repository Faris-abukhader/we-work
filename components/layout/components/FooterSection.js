import React from 'react'
import Link from 'next/link'
export default function FooterSection({title,items=[]}) {
    console.log(title,items)
  return (
    <section className='w-full'>
        <h1 className='text-xl text-gray-700 pb-4'><b>{title}</b></h1>
        {items.length > 0 && items.map((item)=>{
            return <Link key={item.name} href={`/${item.url}`}><h1 className='text-sm text-gray-500 pb-3 hover:cursor-pointer transition duration-500  hover:translate-x-2 hover:text-blue-600 ease-in-out'>{item.name}</h1></Link>
        })}
    </section>
  )
}
