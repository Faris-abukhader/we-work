import {useState} from 'react'
import CustomDropDown from '../general/CustomDropdown'
import citiesList from '../../utils/citiesList'
import industryList from '../../utils/industries'
export default function SearchFilter() {
    console.log(industryList)
    const [showCityList,setShowCityList] = useState(false)
    const [searchCity,setSearchCity] = useState('')
    const [city,setCity] = useState('')
  return (
    <div className='w-full'>
        <div className='flex justify-between items-end border-b pb-2'>
            <h1 className='text-xl font-bold'>Advance Filter</h1>
            <h1 className='text-sm text-gray-400'>Reset</h1>
        </div>

<div className='py-4'>
<CustomDropDown hasLabel={true} label={'hi'} showList={showCityList} setShowList={setShowCityList} isValid={true} hasData={true}>
            <input className={`ring-0.5  ring-gray-200 hover:border-none hover:outline-none focus:border-none focus:outline-none  rounded-md w-full p-2`} value={searchCity} onChange={(e)=>setSearchItemGroup(e.target.value)}/>
              {
                citiesList && 
                citiesList.filter((item,index)=>item.name.toLowerCase().includes(searchCity)).map((item,index)=>{
                  return (
                    <CustomDropDown.ListItem key={index} setShowList={setShowCityList}>
                    <h1 onClick={()=>setCity(item.name)}>{item.name}</h1>
                    </CustomDropDown.ListItem>
                    )
                })
              }
            </CustomDropDown>

</div>

            <label className='pt-4 text-xl font-bold'>Industry</label>
            

    </div>
  )
}
