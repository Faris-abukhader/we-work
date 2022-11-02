import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {CloseButton,ConfirmButton,InputWithLabel} from '../../general/general'
import {fireNotification,languageLevels,languagesList} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import {addNewEducation as addEduction} from '../../../store/slices/education'
export default function AddEducationModel( {show,toggle}) {
    const session = useSession()
    const dispatch = useDispatch()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({schoolName:false,dateAttend:false,dateGraduate:false,areaOfStudy:false,degree:false})
    const [education,setEducation] = useState({schoolName:'',dateAttend:'',dateGraduate:'',areaOfStudy:'',degree:'',description:''})

    

    const inputHandler = (e)=>{
      setEducation((prevs)=>({
        ...prevs,
        [e.target.name]:e.target.value
      }))
    }
    const validation = () => {
      if (isValid.schoolName && isValid.dateAttend && isValid.dateGraduate && isValid.areaOfStudy && isValid.degree) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
        setEducation({schoolName:'',dateAttend:'',dateGraduate:'',areaOfStudy:'',degree:'',description:''})
    }
  
    useEffect(() => {
      setValid(()=>({
        ['schoolName']:education.schoolName.length > 0 ? true:false,
        ['dateAttend']:education.dateAttend.length > 0 ? true:false,
        ['dateGraduate']:education.dateGraduate.length > 0 ? true:false,
        ['areaOfStudy']:education.areaOfStudy.length > 0 ? true:false,
        ['degree']:education.degree.length > 0 ? true:false,
      }))
      validation()
    }, [education])
  
    const addNewEducation = ()=>{
      axios.post(`${process.env.API_URL}/education/${userId}`,{...education},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'New education record added successfully.',icon:'success'})
        dispatch(addEduction(res.data))
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
  return (//schoolName:'',dateAttend:'',dateGraduate:'',areaOfStudy:'',degree:'',description:''
    <CustomModal show={show} toggle={toggle} title={`Add new language`} >
      <CustomModal.Body>
        <section className="py-1">
        <InputWithLabel label={`School name`} isValid={isValid.schoolName} name={`schoolName`} value={education.schoolName} inputHandler={inputHandler} />
        <div className='flex space-x-2'>
        <InputWithLabel label={`Date attend`} isValid={isValid.dateAttend} type={`date`} name={`dateAttend`} value={education.dateAttend} inputHandler={inputHandler} />
        <InputWithLabel label={`date graduate`} isValid={isValid.dateGraduate} type={`date`} name={`dateGraduate`} value={education.dateGraduate} inputHandler={inputHandler} />
        </div>
        <InputWithLabel label={`Area of study`} isValid={isValid.areaOfStudy} name={`areaOfStudy`} value={education.areaOfStudy} inputHandler={inputHandler} />
        <InputWithLabel label={`Degree`} isValid={isValid.degree} name={`degree`} value={education.degree} inputHandler={inputHandler} />
        <InputWithLabel label={`Description`} isTextArea={true} name={`description`} value={education.description} inputHandler={inputHandler} />
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={addNewEducation} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
