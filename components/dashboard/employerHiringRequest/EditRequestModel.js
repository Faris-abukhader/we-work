import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,ConfirmButton,SegimentPicker,CustomDropDown} from '../../general/general'
import {fireNotification} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { modifyOneHiringRequest } from '../../../store/slices/hiringRequest'
export default function EditRequestModel({show,toggle,data}) {
    console.log(data)
    const session = useSession()
    const dispatch = useDispatch()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({ ownerNote:false })
    const [request,setRequest] = useState({isEmployerAccepet:false,ownerNote:''})

    useEffect(()=>{
       if(show){
        setRequest({isEmployerAccepet:data?.isEmployerAccepet,ownerNote:data?.ownerNote})
      }
    },[show])

    const inputHandler = (e) => {
      setRequest((prevs) => ({
        ...prevs,
        [e.target.name]: e.target.value
      }))
    }

    const setIsEmploymentAccept = (isAccept)=>{
      setRequest((prevs) => ({
        ...prevs,
        ['isEmployerAccepet']: isAccept
      }))
    }


    
    const validation = () => {
      if (isValid.ownerNote) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
      setRequest({isEmployerAccepet:false,ownerNote:''})
    }
  
    useEffect(() => {
      setValid(() => ({
        ['ownerNote']: request.ownerNote.length > 0 ? true : false,
      }))
      validation()
    }, [request])
  

    useEffect(()=>{
      console.log(request)
    },[request])

    const updateOneRequest = ()=>{
      axios.put(`${process.env.API_URL}/hiringRequest/${data.id}`,{...request},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'Hiring request updated successfully.',icon:'success'})
        dispatch(modifyOneHiringRequest(res.data))
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
    <CustomModal show={show} toggle={toggle} title={`Update a hiring request`} >
      <CustomModal.Body>
        <section className="py-1">
          <div className='grid grid-cols-1 w-full space-y-3'>
          <InputWithLabel label={`Description`} isTextArea={true} isValid={isValid.ownerNote} name={`ownerNote`} value={request.ownerNote} inputHandler={inputHandler} />
          <CustomDropDown mainLabel='Do you accept' hasLabel={true} label={'yes or no'} hasData={true} handler={setIsEmploymentAccept} data={['true','false']} selectedItem={request.isEmployerAccepet}/>
          </div>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={updateOneRequest} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
