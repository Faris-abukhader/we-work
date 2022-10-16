import { useState } from 'react'
import industryList from '../../utils/industries'
import salaryRange from '../../utils/salaryRange'
import Checkbox from '../general/Checkbox'
import popularKey from '../../utils/popularKey'
import CountriesDropdown from './CountriesDropdown'
export default function SearchFilter() {
  console.log(industryList)
  const [city, setCity] = useState('')
  return (
    <div className='w-full space-y-2'>
      <div className='flex justify-between items-end border-b pb-2'>
        <h1 className='text-xl font-bold'>Advance Filter</h1>
        <h1 className='text-sm text-gray-400'>Reset</h1>
      </div>
      <div className='py-4'>
        <CountriesDropdown label={'Amman, Jordan'} setCity={setCity}/>
      </div>
      <section className='space-y-2 pb-3 border-b'>
      <label className='pt-4 text-xl font-bold'>Industry</label>
      {industryList && industryList.map((item)=>{return<Checkbox key={item} isChecked={true} label={item}  num={Math.floor(Math.random()*100+1)}/>})}
      </section>
      <section className='space-y-2 py-3 border-b'>
      <label className='pt-4 text-xl font-bold'>Salary Range</label>
      {salaryRange && salaryRange.map((item)=>{return<Checkbox key={item.label} isChecked={true} label={item.label} num={Math.floor(Math.random()*100+1)}/>})}
      </section>
      <section className='space-y-2 py-3 border-b'>
      <label className='pt-4 text-xl font-bold'>Popular Keyword</label>
      {popularKey && popularKey.map((item)=>{return<Checkbox key={item} isChecked={true} label={item} num={Math.floor(Math.random()*100+1)}/>})}
      </section>
    </div>
  )
}
