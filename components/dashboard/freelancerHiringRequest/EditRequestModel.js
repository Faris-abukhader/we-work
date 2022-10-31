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
    const [isValid, setValid] = useState({ freelancerNote:false })
    const [request,setRequest] = useState({isFreelancerAccept:false,freelancerNote:''})

    useEffect(()=>{
       if(show){
        setRequest({isFreelancerAccept:data?.isFreelancerAccept,freelancerNote:data?.freelancerNote})
      }
    },[show])

    const inputHandler = (e) => {
      setRequest((prevs) => ({
        ...prevs,
        [e.target.name]: e.target.value
      }))
    }

    const setIsFreelancerAccept = (isAccept)=>{
      setRequest((prevs) => ({
        ...prevs,
        ['isFreelancerAccept']: isAccept
      }))
    }


    
    const validation = () => {
      if (isValid.freelancerNote) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
      setRequest({isFreelancerAccept:false,ownerNote:''})
    }
  
    useEffect(() => {
      setValid(() => ({
        ['freelancerNote']: request?.freelancerNote?.length > 0 ? true : false,
      }))
      validation()
    }, [request])
  

    useEffect(()=>{
      console.log(request)
    },[request])

    const updateOneRequest = ()=>{
      console.log(request)
      let temp = request
      temp.isFreelancerAccept = request.isFreelancerAccept == 'accept' ? true:false
      axios.put(`${process.env.API_URL}/hiringRequest/freelancer/${data.id}`,{...temp},{ headers: { token } })
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
          <InputWithLabel label={`Description`} isTextArea={true} isValid={isValid.freelancerNote} name={`freelancerNote`} value={request.freelancerNote} inputHandler={inputHandler} />
          <CustomDropDown mainLabel='Do you accept' hasLabel={true} label={'accept or refuse'} hasData={true} handler={setIsFreelancerAccept} data={['accept','refuse']} selectedItem={request.isFreelancerAccept?'accept':'refuse'}/>
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
