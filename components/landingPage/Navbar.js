import {useState,useEffect} from 'react'
import Image from 'next/image'
export default function Navbar({burgerHandler}) {

    const [backgroundColor,setBackgroundColor] = useState('')


    const changeBackground = ()=>{
        if(window.pageYOffset >=120){
          setBackgroundColor('bg-gray-800')
        }else{
          setBackgroundColor('bg-gray-600 bg-opacity-20')
        } 
      }
    
      useEffect(()=>{
        document.addEventListener('scroll',changeBackground)
      },[])
    
  return (
    <div style={{backdropFilter: 'blur(10px)'}} className={`w-full fixed top-0 p-3 py-5 ${backgroundColor} z-10`}>
        <div className='blur-0 flex justify-between items-center text-gray-100'>
        <div name='pageName' className='text-3xl font-bold animate__animated animate__fadeInLeft animate__slow'>
            We Work
        </div>
        <div className='hidden md:block'>
            <ul className='flex space-x-6 animate__animated'>
                <li className='hover:text-blue-500 hover:cursor-pointer hover:scale-110 animate__animated animate__fadeInLeft  animate__slower'>Home</li>
                <li className='hover:text-blue-500 hover:cursor-pointer hover:scale-110 animate__animated animate__fadeInDown animate__slower'>Job list</li>
                <li className='hover:text-blue-500 hover:cursor-pointer hover:scale-110 animate__animated animate__fadeInRight animate__slower'>abukahder</li>
            </ul>
        </div>
        <div style={{backdropFilter: 'blur(10px)'}} className='animate__animated animate__fadeInRight animate__slow hidden md:block bg-opacity-40 p-1 px-4 rounded-md outline outline-offset-1 outline-gray-500 bg-blue-800 text-xs text-white hover:cursor-pointer  hover:outline-gray-600'>Login</div>
        <button  onClick={()=>burgerHandler()} className=' md:hidden appearance-none ring-0.7 ring-blue-400 rounded-md w-[25px] h-[25px] flex justify-center items-center'>
            <Image id='burger_button' src={`/icons/list.svg`} width={20} height={20} alt='burger'/>
        </button>
        </div>
    </div>
  )
}
