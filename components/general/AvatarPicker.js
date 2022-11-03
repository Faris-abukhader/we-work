import { useEffect, useState } from 'react'
import { avatarList } from '../../public/avatar/avatarList'
import Image from 'next/image'
export default function AvatarPicker({label,clickHandler,initalAvatar="avatar-1.svg"}) {
    var [selectedAvatar,setSelectedAvatar] = useState(initalAvatar)

    const handlerClickEvent = (e)=>{
      setSelectedAvatar(e.target.name)
      clickHandler(e.target.name)
      console.log(selectedAvatar)
    }

    useEffect(()=>{
      console.log(initalAvatar)
       setSelectedAvatar(initalAvatar)
    },[initalAvatar])

    // useEffect(()=>{
    //   console.log(selectedAvatar)
    // },[selectedAvatar])
    return (
  <div className='h-[170px]'>
      <div className='relative pl-2 text-sm text-gray-700'>{label}</div>
    <div  className='absolute top-100 w-full h-[120px] flex overflow-x-auto space-x-4 scrollbar-hide '>
        {avatarList.map((avatar,index)=>{
              return(
                <div key={index}  className={`p-0 ml-1 my-2 w-[100px] h-[100px] flex-none  ring appearance-none opacity-90 hover:opacity-100 hover:scale-105 hover:ring-blue-300   cursor-pointer rounded-md  ${selectedAvatar==avatar ? 'ring-blue-400':'ring-gray-200'}  `}>
                    <Image onClick={handlerClickEvent} name={avatar} className={` appearance-none  cursor-pointer rounded-md }  min-w-[100px] h-[100px]`} width={100} height={100} src={`/avatar/${avatar}`} alt={avatar}/>
                  </div>
              )
      })}
    </div>
    
    </div>
  )
}
