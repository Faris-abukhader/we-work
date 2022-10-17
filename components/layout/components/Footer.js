import React from 'react'
import Image from 'next/image'
import NewsLetter from './NewsLetter'
export default function Footer() {
  return (
    <div className='w-full flex-row justify-center px-2 md:px-20'>
        <NewsLetter/>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-4'>
            <section className='w-full '>
            <div name='pageName' className={`flex items-center text-3xl font-bold pb-2`}>
          <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo'/>
          <div>e work</div>
        </div>
        <p className='text-xs text-gray-500'>WeWork is the Freelancing platform , where talend and professional people can find there Full time part time job . It also make it easier to employer to find him/her suitable employee fast and easy.</p>
           <div>
            <button>
            <Image  src={`/icons/facebook.svg`} width={25} height={25} alt='facebook'/>
            </button>
            <button>
            <Image src={`/icons/twitter.svg`} style={{background:'#1d4ed8',borderRadius:'99%',padding:'2'}} width={23} height={23} alt='twitter'/>
            </button>
            <button>
                <Image className='rounded-full' src={`/icons/linkedIn.svg`} width={25} height={25} alt='linkedIn'/>
            </button>
           </div>
            </section>
         
        </div>
    </div>
  )
}
