import { useEffect, useState,useRef } from 'react';
import Image from 'next/image';
export default function Offcanvas({show}) {
  const offcanvasRef = useRef(null)

    return (
      <div ref={offcanvasRef}  style={{backdropFilter: 'blur(20px)'}}  className={`offcanvas z-50 bg-gray-600 bg-opacity-60 offcanvas-start fixed bottom-0 flex flex-col w-1/2 max-w-md ${show ? 'flex':'hidden'} bg-clip-padding shadow-xl outline-none text-gray-700 after:duration-1000 top-0 left-0' border-none animate__animated animate__fast ${show ? 'animate__fadeInLeft':'animate__fadeOutLeft'} `}>
      <div  className="offcanvas-body  flex-grow overflow-y-auto scrollbar-hide ">
      <div className='relative pb-4 '>
        <div className='w-full flex justify-center pt-2'>
        <Image src='/illustrations/logo.svg' width={40} height={40} alt='logo' />
        </div>
                {/* <button type="button" className={` bg-white shadow-sm hover:scale-105 flex ${language=='ar'?'mr-auto':'ml-auto'} justify-center items-center rounded-full w-6 h-6 text-xs text-slate-100`} onClick={()=>toggle()}>
                  <Image src={`/icons/${language=='ar'?'rightArrow':'leftArrow'}.svg`} width={16} height={16} alt='arrow'/>
                </button> */}
            </div>
            <div className='flex flex-col pt-3 cursor-pointer'>
                {/* {list && list.map((item, index) => {
                    return (
                        <SidebarItem key={index} url={item.url} title={t(item.title,language)} page={item.page} />
                    )
                })} */}
            </div>
      </div>
    </div>
        )
  }
  