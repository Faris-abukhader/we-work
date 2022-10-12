import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
export const ListItem = ({children,setShowList})=>{
  return(
    <div onClick={()=>setShowList(false)} className={` px-3 py-1 w-full hover:bg-gray-200 hover:text-white rounded-lg cursor-pointer`} >
      {children}
    </div>
  )
}

export const CustomDropDown = ({selectedItem='',showList=false,setShowList,children,hasLabel,mainLabel='',label,isValid,py=2,hasData=false})=> {
    const componentRef = useRef(null)

    // to handle if the next click was outside the component (to close it)
  const handleClickOutSideComponent = (e)=>{
    try{
      if(!componentRef.current?.contains(e.target)){
        setShowList(false)
      }  
    }catch(err){
      console.log(err)
    }
  }

  // add event to click listener to close the dropdown if the click was outside it
  useEffect(()=>{
      document.addEventListener('click',handleClickOutSideComponent)
  },[])

  return (  
<div ref={componentRef} className="relative inline-block w-full">
<div>
    {hasLabel && <div className={`pb-1 text-xs  line-clamp-1  ${isValid ? 'text-gray-500' : 'text-red-400'}`}>{mainLabel}</div>}
    <button onClick={()=>setShowList(!showList)} type="button" className={` inline-flex  justify-center w-full rounded-md border-none hover:border-none hover:outline-none focus:border-none focus:outline-none  ring-0.5  ${isValid?'ring-gray-300':'ring-red-400'}  shadow-sm px-4 py-${py} bg-transparent text-sm font-medium text-gray-300`} id="menu-button" aria-expanded="true" aria-haspopup="true">
     <Image src={`/icons/chevron${showList? 'Up':'Down'}.svg`} width={16} height={16} alt="chevronIcon" />
      <div className={`m-auto line-clamp-1 ${selectedItem.length < 1 && 'text-xs'} ${!isValid&&'text-red-400'}`}>{selectedItem.length > 1 ? selectedItem:label}</div>
    </button>
  </div>
  {hasData && <div className={`${showList ? 'block':'hidden'} origin-top-right absolute right-0 mt-2 w-full h-44  overflow-scroll p-1 rounded-md ring-0.7 ring-gray-300 bg-white  z-20 focus:outline-none"`}>
    {showList && children}

  </div>
  }
  </div>
  )
}

CustomDropDown.ListItem = ListItem
export default CustomDropDown;

