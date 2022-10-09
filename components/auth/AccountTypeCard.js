import React from 'react'
import Image from 'next/image'
export default function AccountTypeCard({label,icon,hasHandler=true,clickHandler}) {
    const handler = ()=>{
        if(hasHandler){
            clickHandler(label.toLocaleLowerCase()[0])
        }
    }
    return (
        <div onClick={handler} className={`border border-gray-100 p-2 rounded-lg text-center`}>
            <p className="text-xs">{label}</p>
            <Image src={`/icons/${icon}`} width={90} height={90} alt='freelancer' />
        </div>
    )
}
