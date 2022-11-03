import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {CloseButton,ConfirmButton,InputWithLabel} from '../../general/general'
import {fireNotification,hourBerWeekOptions} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
export default function UpdateAboutMeModel( {show,toggle,data,setAboutMeFunc}) {
    const session = useSession()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState(false)
    const [aboutMe,setAboutMe] = useState('')

    const inputHandler = (e)=>{
        setAboutMe(e.target.value)
    }

    useEffect(()=>{
     if(show){
        console.log(data)
      setAboutMe(data??'')
     }
    },[show])

    
    const validation = () => {
      if (isValid) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
        setAboutMe('')
    }
  
    useEffect(() => {
      setValid(aboutMe.length > 0 ? true : false)
      validation()
    }, [aboutMe])

    useEffect(()=>{
       console.log(aboutMe)
    },[aboutMe])
  
    const updateWeeklyHours = ()=>{
      axios.put(`${process.env.API_URL}/freelancer/aboutMe/${userId}`,{aboutMe:aboutMe},{ headers: { token } })
      .then((res) => {
        setAboutMeFunc(aboutMe)
        fireNotification({label:'Profile info updated successfully.',icon:'success'})
        toggle()
        reset()
        console.log(res)
      }).catch((err) => {
        fireNotification({label:'Something went wrong.',icon:'error'})
        console.log(err)
      })
    }

    const close = ()=>{
      reset()
      toggle()
    }
  return (
    <CustomModal show={show} toggle={toggle} title={`Hours per week`} >
      <CustomModal.Body>
        <section className="py-1">
            <InputWithLabel label='About me' value={aboutMe} isValid={isValid} inputHandler={inputHandler}/>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={updateWeeklyHours} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
