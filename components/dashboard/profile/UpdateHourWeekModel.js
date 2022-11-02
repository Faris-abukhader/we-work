import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {CloseButton,ConfirmButton,CustomDropDown} from '../../general/general'
import {fireNotification,hourBerWeekOptions} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
export default function UpdateHourWeekModel( {show,toggle,data}) {
    const session = useSession()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState(false)
    const [weeklyHour,setWeeklyHour] = useState('')

    useEffect(()=>{
     if(show){
      setWeeklyHour(data??'')
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
        setWeeklyHour('')
    }
  
    useEffect(() => {
      setValid(weeklyHour.length > 0 ? true : false)
      validation()
    }, [weeklyHour])

    useEffect(()=>{
       console.log(weeklyHour)
    },[weeklyHour])
  
    const updateWeeklyHours = ()=>{
      axios.put(`${process.env.API_URL}/freelancer/weeklyHour/${userId}`,{weeklyWantingHour:weeklyHour},{ headers: { token } })
      .then((res) => {
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
            <CustomDropDown mainLabel='I can currently work' isValid={isValid} hasLabel={true} label={weeklyHour}  hasData={true} handler={setWeeklyHour} data={hourBerWeekOptions} selectedItem={weeklyHour}/>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={updateWeeklyHours} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
