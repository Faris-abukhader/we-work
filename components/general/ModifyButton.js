import Image from "next/image"
export default function ModifyButton({onClick,id=''}) {
  return (
    <div  onClick={()=>onClick(id)} className="w-[30px] h-[30px] border-2 hover:bg-gray-100 hover:cursor-pointer flex items-center justify-center rounded-full border-blue-700">
        <Image src={`/icons/modify.svg`} width={14} height={14} alt='edit'/>
    </div>
  )
}
