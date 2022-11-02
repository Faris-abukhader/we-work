import React, { useState } from 'react'
import {AddButton, DeleteButton} from '../../general/general'
import {AddEducationModel}from './profile'
import {fireNotification} from '../../../utils/utils'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {deleteOneEducation as deleteEducation} from '../../../store/slices/education'
import { useSelector } from 'react-redux'
export default function Education() {
const educationList = useSelector((state)=>state.education)

  const dispatch = useDispatch()
  const [showAddModel,setShowAddModel] = useState(false)

  const toggleAddModel = ()=>{
    setShowAddModel(!showAddModel)
  }

  const deleteOneEducation = (id)=>{
    axios.delete(`${process.env.API_URL}/education/${id}`)
    .then(()=>{
      fireNotification({label:'Education record deleted successfully.',icon:'success'})
      dispatch(deleteEducation(id))
    })
    .catch(()=>{
      fireNotification({label:'Something went wrong.',icon:'error'})
    })
  }
  return (
    <div className='py-4'>
        <div className='flex items-center space-x-2'>
            <h1 className='text-xl '><b>Education</b></h1>
            <AddButton onClick={toggleAddModel}/>
            
        </div>
        {educationList.length > 0 && educationList.map((education,index)=><div key={index} className='flex pb-3'>
            <div className='flex justify-between items-center space-x-2'>
                <div>
                <h1 className='text-lg font-bold'>{education.schoolName}</h1>
                <h1 className='text-md text-gray-600'>{education.areaOfStudy}</h1>
                <h1 className='text-sm text-gray-600'>{education.degree}</h1>
                </div>
                <DeleteButton onClick={()=>deleteOneEducation(education.id)} />
            </div>
          </div>)
        }
        <AddEducationModel show={showAddModel} toggle={toggleAddModel}/>
    </div>
  )
}
