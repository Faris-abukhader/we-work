import {useEffect, useState} from 'react'

export default function SegimentPicker({isValid=true,isReview=false,value,hasHandler=true,handler,type='text',name,label}) {
    const [itemList,setItemList] = useState([])
    const [currentItem,setCurrentItem] = useState('')

    useEffect(()=>{
        if(value?.length > 0){
            setItemList(value.split(','))
        }
    },[value])

    const inputHandler = (e)=>{
        setCurrentItem(e.target.value)
    }

    const handleSpace = (e)=>{
        if (e.key === 'Enter' || e.code == 'Space') {
            let temp = itemList
            temp.push(currentItem)
            setItemList(temp)
            // setItemList((prevs)=>([...prevs.push(currentItem)]))
            setCurrentItem('')
        }
    }

    const removeItem = (item)=>{
        setItemList((prevs)=>([ ...prevs.filter((i)=>i!=item)]))
    }
    useEffect(()=>{
        if(hasHandler){
            handler(itemList.join(','))
        }
    },[itemList.length])

  return (
    <div className='w-full flex-row justify-center items-start'>
    <h1 className={`text-xs pb-1 ${isValid ? 'text-gray-400' : 'text-red-400'}`}>{label}</h1>
    <div className={`w-full border ${isValid ? 'border-blue-400' : ' border-red-400'} flex flex-wrap items-center focus:outline-none disabled:bg-white  px-3 py-2 m-0 text-gray-500 mb-3  bg-transparent  rounded-md p-1 ${!hasHandler && 'border-0'} text-sm`} disabled={!hasHandler} name={name} value={((value?.length<1) && !hasHandler) ? '. . .':value} type={type}>
       {itemList.length > 0 && itemList.map((item,index)=><div key={index} onClick={()=>{if(!isReview){removeItem(item)}}} className='p-1 bg-blue-400 text-white rounded-md m-2 w-fit hover:cursor-pointer hover:bg-blue-500'>{item}</div>)}
    <input className='hover:outline-none focus:outline-none py-2' value={currentItem} onChange={inputHandler} onKeyDown={handleSpace}/>
    </div>
    </div>
  )
}
