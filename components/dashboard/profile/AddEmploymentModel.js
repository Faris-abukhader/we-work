import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {CloseButton,ConfirmButton,InputWithLabel} from '../../general/general'
import {fireNotification} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import {addNewEmploymentHistory as addEmploymentHistory} from '../../../store/slices/employmentHistory'
export default function AddEmploymentHistoryModel( {show,toggle}) {
    const session = useSession()
    const dispatch = useDispatch()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({companyName:false,position:false,country:false,city:false,fromDate:false,untilDate:false})
    const [employmentHistory,setEmploymentHistory] = useState({companyName:'',position:'',country:'',city:'',fromDate:'',untilDate:'',description:''})


    const inputHandler = (e)=>{
        setEmploymentHistory((prevs)=>({
        ...prevs,
        [e.target.name]:e.target.value
      }))
    }
    const validation = () => {
      if (isValid.companyName && isValid.position && isValid.country && isValid.city && isValid.fromDate && isValid.untilDate) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
        setEmploymentHistory({fromWhere:'',issuedDate:'',name:'',description:''})
    }
  
    useEffect(() => {
      setValid(()=>({
        ['companyName']:employmentHistory.companyName?.length > 0 ? true:false,
        ['position']:employmentHistory.position?.length > 0 ? true:false,
        ['country']:employmentHistory.country?.length > 0 ? true:false,
        ['city']:employmentHistory.city?.length > 0 ? true:false,
        ['fromDate']:employmentHistory.fromDate?.length > 0 ? true:false,
        ['untilDate']:employmentHistory.untilDate?.length > 0 ? true:false,
      }))
      validation()
    }, [employmentHistory])
  
    const addNewEmploymentHistory = ()=>{
      axios.post(`${process.env.API_URL}/employmentHistory/${userId}`,{...employmentHistory},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'New employment history record added successfully.',icon:'success'})
        dispatch(addEmploymentHistory(res.data))
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
    <CustomModal show={show} toggle={toggle} title={`Add new employment record`} >
      <CustomModal.Body>
        <section className="py-1">
        <InputWithLabel label={`Company name`} isValid={isValid.companyName} name={`companyName`} value={employmentHistory.companyName} inputHandler={inputHandler} />
        <InputWithLabel label={`Position`} isValid={isValid.position} name={`position`} value={employmentHistory.position} inputHandler={inputHandler} />
        <InputWithLabel label={`Country`} isValid={isValid.country} name={`country`} value={employmentHistory.country} inputHandler={inputHandler} />
        <InputWithLabel label={`City`} isValid={isValid.city} name={`city`} value={employmentHistory.city} inputHandler={inputHandler} />
        <InputWithLabel label={`From date`} isValid={isValid.fromDate} type={`date`} name={`fromDate`} value={employmentHistory.fromDate} inputHandler={inputHandler} />
        <InputWithLabel label={`Until date`} isValid={isValid.untilDate} type={`date`} name={`untilDate`} value={employmentHistory.untilDate} inputHandler={inputHandler} />
        <InputWithLabel label={`Description`} isValid={isValid.description} isTextArea={true} name={`description`} value={employmentHistory.description} inputHandler={inputHandler} />
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={addNewEmploymentHistory} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
