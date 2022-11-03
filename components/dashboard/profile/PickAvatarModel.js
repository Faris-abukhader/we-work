import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {CloseButton,ConfirmButton,CustomDropDown,AvatarPicker} from '../../general/general'
import {fireNotification,languageLevels,languagesList} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
export default function PickerAvatarModel( {show,toggle,data,updateAvatar}) {
    const session = useSession()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState(false)
    const [avatar,setAvatar] = useState('')

    useEffect(()=>{
       if(show){
        setAvatar(data)
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
        setAvatar('')
    }
  
    useEffect(() => {
      setValid(avatar.length > 0 ? true:false)
      validation()
    }, [avatar])

    useEffect(()=>{
       console.log(avatar)
    },[avatar])
  
    const UpdateAvatar = ()=>{
      axios.put(`${process.env.API_URL}/freelancer/avatar/${userId}`,{avatar:avatar},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'Account avatar updatedd successfully.',icon:'success'})
        updateAvatar(avatar)
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
    <CustomModal show={show} toggle={toggle} title={`Account avatar picker`} >
      <CustomModal.Body>
        <section className="py-1 flex items-center space-x-2">
            <AvatarPicker label={`Account avatar`} initalAvatar={avatar} clickHandler={setAvatar}/>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={UpdateAvatar} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
