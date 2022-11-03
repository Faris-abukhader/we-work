import {useEffect, useState} from 'react'
import {ModifyButton} from '../../../components/general/general'
import {UpdateAboutMeModel} from '../../../components/dashboard/profile/profile'
export default function AboutMe({aboutMe,isReview=false}) {
  const [showUpdateModel,setShowUpdateModel] = useState(false)
  const [aboutMeValue ,setAboutMe] = useState('')

  useEffect(()=>{
    setAboutMe(aboutMe)
  },[aboutMe])

  const toggleUpdateModel = ()=>{
    setShowUpdateModel(!showUpdateModel)
  }
    return (
        <div>
            <div className='flex items-center space-x-2'>
            <h1 className='text-xl md:pl-4'><b>About me</b></h1>
            {!isReview && <ModifyButton onClick={toggleUpdateModel}/>}
            
        </div>
            <p className='md:pl-4'>{aboutMeValue}</p>
            {!isReview &&<UpdateAboutMeModel show={showUpdateModel} toggle={toggleUpdateModel} data={aboutMe} setAboutMeFunc={setAboutMe}/>}
        </div>
    )
}
