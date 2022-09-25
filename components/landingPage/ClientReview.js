import { useState,useEffect,useRef } from 'react'
import ReviewCard from './ReviewCard'

export default function ClientReview() {

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
    <div  ref={sectionRef} className='grid grid-rows-2 items-center justify-around text-center h-screen'>
      <section>
      <h1 className={`text-lg text-gray-500 animate__animated ${isVisiable&&`animate__slideInDown animate__slower`}`}>What Say Our Client</h1>
    <h1 className={`text-3xl font-bold pb-20 animate__animated ${isVisiable&&`animate__slideInDown animate__slower`}`}>Our Success Stories</h1>
      </section>
    
    <section className='w-full px-5 space-y-14 sm:space-y-0  flex-row sm:flex gap-5 justify-around py-5s'>
        <ReviewCard image={`elon.webp`} username={'Elon musk'}  comment={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
        <ReviewCard image={`bezos.webp`} username={'Jeff bezos'}  comment={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
        <ReviewCard image={`gates.webp`} username={'Bill gates'} comment={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>

    </section>
    </div>
  )
}
