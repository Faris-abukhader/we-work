import { useState,useEffect,useRef } from 'react'
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
    <div  ref={sectionRef}  style={{backdropFilter: 'blur(80px)'}} className={`w-full h-fit space-y-4 rounded-md p-3 py-8 ${colorSchema==1?'bg-blue-500':'bg-red-500'} bg-opacity-10 animate__animated ${isVisiable&&`${colorSchema==1?'animate__fadeInLeft':'animate__fadeInRight'} animate__slower`}`}>
        <h1 className={`text-2xl font-bold `}>{title}</h1>
        <h1 className={`text-lg ${colorSchema==1?'text-red-400':'text-blue-400'}`}>{subtitle}</h1>
        <p className='text-sm text-gray-600'>{description}</p>
        <button className={`outline outline-white outline-offset-2 rounded-md p-2 ${colorSchema==1?'hover:bg-blue-300':'hover:bg-red-300'}`}>Sign up </button>
    </div>
  )
}
