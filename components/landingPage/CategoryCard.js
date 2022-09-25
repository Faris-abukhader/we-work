import Image from "next/image"
export default function CategoryCard({icon,title,totalAvailable}) {
  return (
    <div style={{backgroundImage:'url("/background/seventh.png")'}} className={`relative rounded-md overflow-hidden`}>
        <div style={{backdropFilter: 'blur(8px)'}} className={`text-center space-y-3 p-3 py-6 rounded-md h-full`}>
        <Image src={`/icons/${icon}`} width={90} height={90} alt='category_icon'/>
        <h2 className={`text-2xl font-bold text-white`}>{title}</h2>
        <p className={`text-sm text-gray-200`}>{`(${totalAvailable} Jobs Available)`}</p>
        </div>
    </div>
  )
}
