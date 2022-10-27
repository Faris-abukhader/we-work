import { useRef, useState, useEffect } from "react"
import Image from "next/image"
export default function CategoryCard({ icon, title, totalAvailable }) {
  const cardRef = useRef()
  const [isVisiable, setVisiable] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setVisiable(entry.isIntersecting)
    })
    observer.observe(cardRef.current)
  }, [])

  return (
    <div ref={cardRef} className={`relative border rounded-xl p-2 overflow-hidden hover:border-2 hover:border-blue-500 hover:cursor-pointer animate__animated ${isVisiable && 'animate__fadeIn animate__slower'}`}>
      <div style={{ backdropFilter: 'blur(8px)' }} className={`flex justify-start items-center space-x-3 p-3 py-6 rounded-md h-full`}>
        <Image src={`/icons/${icon}`} width={50} height={50} alt='category_icon' />
        <div>
          <h2 className={`text-lg font-bold`}>{title}</h2>
          <p className={`text-sm text-gray-400`}>{`(${totalAvailable} Jobs Available)`}</p>
        </div>
      </div>
    </div>
  )
}
