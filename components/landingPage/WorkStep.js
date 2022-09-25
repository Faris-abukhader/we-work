import { useState,useEffect,useRef } from 'react'
import Image from 'next/image'
export default function WorkStep({label,number,image}) {

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
    <div  ref={sectionRef}  className={`py-7 relative flex justify-center text-center animate__animated ${isVisiable&&'animate__bounceIn animate__slower'}`}>
    <div className='relative w-fit'>
    <Image src={`/icons/${image}`} width={90} height={90} className="z-10" alt=""/>
    <span className="absolute -top-8 -left-2 text-6xl text-gray-600 opacity-20">{number}</span>
    <h4>{label}</h4>
    </div>
 </div>
)
}
