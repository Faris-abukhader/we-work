import React, { useState } from 'react'
import {AddButton, DeleteButton} from '../../general/general'
import {AddLanguageModel}from './profile'
import {fireNotification} from '../../../utils/utils'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {deleteOneLanguage as deleteLanguage} from '../../../store/slices/language'
import { useSelector } from 'react-redux'
export default function Languages({isReview=false}) {
  const languageList = useSelector((state)=>state.language)
  const dispatch = useDispatch()
  const [showAddModel,setShowAddModel] = useState(false)

  const toggleAddModel = ()=>{
    setShowAddModel(!showAddModel)
  }

  const deleteOnLanguage = (id)=>{
    axios.delete(`${process.env.API_URL}/language/${id}`)
    .then(()=>{
      fireNotification({label:'Language deleted successfully.',icon:'success'})
      dispatch(deleteLanguage(id))
    })
    .catch(()=>{
      fireNotification({label:'Something went wrong.',icon:'error'})
    })
  }
  return (
    <div className='py-4'>
        <div className='flex items-center space-x-2'>
            <h1 className='text-xl '><b>Languages</b></h1>
            {!isReview &&<AddButton onClick={toggleAddModel}/>}
            
        </div>
        {languageList.length > 0 && languageList.map((language,index)=><div key={index} className='flex space-x-2 py-2 items-center'>
          <h1>{language.name} : {language.level}</h1>
          {!isReview &&<DeleteButton onClick={()=>deleteOnLanguage(language.id)} />}
          </div>)
        }
        {!isReview &&<AddLanguageModel show={showAddModel} toggle={toggleAddModel}/>}
    </div>
  )
}
