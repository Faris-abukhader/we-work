import { useState,useEffect,useRef } from 'react'
import Image from 'next/image'
export default function SignUpCard({title,subtitle,description,colorSchema=1}) {
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
    <div  ref={sectionRef}  style={{backgroundColor:colorSchema==1 ?'#0099ff':'#f3f4f5'}} className={`w-full h-fit relative  rounded-md p-3 pb-5  bg-opacity-10 animate__animated- ${isVisiable&&`${colorSchema==1?'animate__fadeInLeft':'animate__fadeInRight'} animate__slower`}`}>
        <h1 className={`text-2xl font-bold text-gray-700`}>{title}</h1>
        <h1 className={`text-lg ${colorSchema==1?'text-gray-50':'text-blue-400'}`}>{subtitle}</h1>
        <p className={`text-sm ${colorSchema==1?'text-gray-200':'text-gray-600'}  pb-20`}>{description}</p>
        <button className={`outline outline-white outline-offset-2 rounded-md p-2 ${colorSchema==1?'hover:bg-blue-300':'hover:bg-blue-300'}`}>Sign up </button>
        <div className='w-1/4 absolute bottom-0 right-0 z-20' >
        <Image src={`/illustrations/${colorSchema==1?'register2.svg':'register1.svg'}`}  width={`150px`} height={`150px`} alt='illustrate' />
        </div>
    </div>
  )
}
