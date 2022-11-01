import React, { useState } from 'react'
import {AddButton,ModifyButton} from '../../general/general'
import {AddLanguageModel}from './profile'
export default function Languages({languageList=[]}) {
  const [showAddModel,setShowAddModel] = useState(false)

  const toggleAddModel = ()=>{
    setShowAddModel(!showAddModel)
  }
  return (
    <div className='py-4'>
        <div className='flex items-center space-x-2'>
            <h1><b>Languages</b></h1>
            <ModifyButton onClick={toggleAddModel}/>
            <AddButton onClick={toggleAddModel}/>
            
        </div>
        {languageList.length > 0 && languageList.map((language,index)=><div key={index} className='flex items-center'><h1>{language.name} : {language.level}</h1></div>)}
        <AddLanguageModel show={showAddModel} toggle={toggleAddModel}/>
    </div>
  )
}
