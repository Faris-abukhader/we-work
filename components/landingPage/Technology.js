import {useState,useEffect,useRef} from 'react'

export default function Technology() {

    const sectionRef = useRef()
    const [isVisiable,setVisiable] = useState(false)
    const imageList = [
        "nextJs.svg",
        "nextauth.png",
        "tailwind.svg",
        "fastify.svg",
        "mysql.svg",
        "prisma.svg",
        "nodemailer.webp"
    ]
  
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setVisiable(entry.isIntersecting)
        })
        observer.observe(sectionRef.current)
    },[])
  
  
    return (
      <div ref={sectionRef} className='w-full  overflow-y-scroll flex items-center justify-between space-x-8 my-14 scrollbar-hide  px-10 '>
          {imageList && imageList.map((logo)=>{
              return (<img key={logo} width={90} alt='logo' className={`${isVisiable ? 'animate__animated animate__bounceInLeft animate__slower':''}`}  src={`/technology/${logo}`}/>)
          })}
      </div>
    )}
