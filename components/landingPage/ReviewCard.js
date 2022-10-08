import { useState,useEffect,useRef } from 'react'
import Image from 'next/image'
export default function ReviewCard({image,username,comment}) {
    const sectionRef = useRef()
    const [isVisiable,setVisiable] = useState(false)
  
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setVisiable(entry.isIntersecting)
        })
        observer.observe(sectionRef.current)
    },[])

  return (
    <div ref={sectionRef} className='w-full'>
            <div style={{background:'#F8FAFF'}} className={`relative w-full py-5 border rounded-md animate__animated ${isVisiable&&`animate__fadeIn animate__slower`}`}>
            <div className='absolute -top-10 left-1/2 transform -translate-x-1/2'>
                <Image src={`/images/${image}`} className='rounded-full' width={100} height={100} alt='profile'/>
            </div>
            <div className='text-center pt-14 px-2'>
                <h1 className='text-2xl font-bold pb-2'>{username}</h1>
            <p className='text-gray-500'>{comment}</p>
            <div className='w-full flex justify-center gap-1 py-3'>
                <Image src={`/icons/star.svg`} className='text-red-300' width={20} height={20} alt='star'/>
                <Image src={`/icons/star.svg`} className='text-red-300' width={20} height={20} alt='star'/>
                <Image src={`/icons/star.svg`} className='text-red-300' width={20} height={20} alt='star'/>
                <Image src={`/icons/star.svg`} className='text-red-300' width={20} height={20} alt='star'/>
                <Image src={`/icons/star.svg`} className='text-red-300' width={20} height={20} alt='star'/>
            </div>
            </div>
            </div>
    </div>
  )
}
