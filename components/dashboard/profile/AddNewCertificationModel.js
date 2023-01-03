import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {CloseButton,ConfirmButton,InputWithLabel} from '../../general/general'
import {fireNotification} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import {addNewCertification as addCertification} from '../../../store/slices/certification'
export default function AddCertificationModel( {show,toggle}) {
    const session = useSession()
    const dispatch = useDispatch()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({fromWhere:false,issuedDate:false,name:false})
    const [certification,setCertification] = useState({fromWhere:'',issuedDate:'',name:'',description:''})


    const inputHandler = (e)=>{
        setCertification((prevs)=>({
        ...prevs,
        [e.target.name]:e.target.value
      }))
    }
    const validation = () => {
      if (isValid.fromWhere && isValid.issuedDate && isValid.name) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
        setCertification({fromWhere:'',issuedDate:'',name:'',description:''})
    }
  
    useEffect(() => {
      setValid(()=>({
        ['fromWhere']:certification.fromWhere.length > 0 ? true:false,
        ['issuedDate']:certification.issuedDate.length > 0 ? true:false,
        ['name']:certification.name.length > 0 ? true:false,
      }))
      validation()
    }, [certification])
  
    const addNewCertification = ()=>{
      axios.post(`${process.env.API_URL}/certification/${userId}`,{...certification},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'New certification added successfully.',icon:'success'})
        dispatch(addCertification(res.data))
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
    <CustomModal show={show} toggle={toggle} title={`Add new certification`} >
      <CustomModal.Body>
        <section className="py-1">
        <InputWithLabel label={`From where`} isValid={isValid.fromWhere} name={`fromWhere`} value={certification.fromWhere} inputHandler={inputHandler} />
        <InputWithLabel label={`Issued date`} type={`date`} isValid={isValid.issuedDate} name={`issuedDate`} value={certification.issuedDate} inputHandler={inputHandler} />
        <InputWithLabel label={`Name`} isValid={isValid.name} name={`name`} value={certification.name} inputHandler={inputHandler} />
        <InputWithLabel label={`Description`} name={`description`} value={certification.description} inputHandler={inputHandler} />
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={addNewCertification} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
