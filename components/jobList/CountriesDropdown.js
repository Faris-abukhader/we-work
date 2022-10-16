import {useState} from 'react'
import CustomDropDown from '../general/CustomDropdown'
import citiesList from '../../utils/citiesList'
export default function CountriesDropdown({hasLabel=true,label,setCity}) {
    const [showCityList,setShowCityList] = useState(false)
    const [searchCity,setSearchCity] = useState('')
    return (
        <CustomDropDown hasLabel={true} label={label} showList={showCityList} setShowList={setShowCityList} isValid={true} hasData={true}>
            <input className={`ring-0.5  ring-gray-200 hover:border-none hover:outline-none focus:border-none focus:outline-none  rounded-md w-full p-2`} value={searchCity} onChange={(e) => setSearchItemGroup(e.target.value)} />
            {
                citiesList &&
                citiesList.filter((item, index) => item.name.toLowerCase().includes(searchCity)).map((item, index) => {
                    return (
                        <CustomDropDown.ListItem key={index} setShowList={setShowCityList}>
                            <h1 onClick={() => setCity(item.name)}>{item.name}</h1>
                        </CustomDropDown.ListItem>
                    )
                })
            }
        </CustomDropDown>
    )
}
