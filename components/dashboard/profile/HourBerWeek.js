import React, { useState } from 'react'
import {AddButton,ModifyButton} from '../../general/general'
import {UpdateHourWeekModel}from './profile'
export default function HourBerWeek({weeklyWantingHour,isReview=false}) {
  const [showModel,setShowModel] = useState(false)

  const toggleModel = ()=>{
    setShowModel(!showModel)
  }
  return (
    <div className='py-4'>
        <div className='flex items-center space-x-2'>
            <h1 className='text-xl '><b>Hours per week</b></h1>
            {!isReview && <div>
           {weeklyWantingHour?.length > 0 ?
             <ModifyButton onClick={toggleModel}/>
            :
            <AddButton onClick={toggleModel}/>
            }
            </div>}
        </div>
        <h1 className='text-sm text-gray-600'>{weeklyWantingHour}</h1>
        {!isReview &&<UpdateHourWeekModel show={showModel} toggle={toggleModel} data={weeklyWantingHour}/>}
    </div>
  )
}
