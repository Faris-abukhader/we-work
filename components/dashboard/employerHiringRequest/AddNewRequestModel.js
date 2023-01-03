import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,ConfirmButton,DropDown,CustomDropDown} from '../../general/general'
import {fireNotification} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { addNewHiringRequest } from '../../../store/slices/hiringRequest'
export default function AddNewRequestModel( {show, toggle,freelancerList,jobList}) {
    const session = useSession()
    const dispatch = useDispatch()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({ freelancerId:false,jobId:false,salary:false,ownerNote:false })
    const [request,setRequest] = useState({ownerId:userId,freelancerId:'',freelancerName:'',salary:0,jobId:'',jobName:'',ownerNote:''})


    useEffect(()=>{
      setRequest((prevs)=>({
        ...prevs,
        ['ownerId']:userId,
      }))
    },[session])

    const inputHandler = (e) => {
      setRequest((prevs) => ({
        ...prevs,
        [e.target.name]: e.target.value
      }))
    }

    const setFreelance = (id,freelancer)=>{
      console.log(id,freelancer)
      setRequest((prevs)=>({
        ...prevs,
        ['freelancerId']:id,
        ['freelancerName']:freelancer
      }))
    }

    const setJob = (id,jobTitle)=>{
      setRequest((prevs)=>({
        ...prevs,
        ['jobId']:id,
        ['jobName']:jobTitle
      }))
    }
    
    const validation = () => {
      if (isValid.freelancerId && isValid.jobId && isValid.ownerNote) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
      setJob({ownerId:'',freelancerId:'',jobId:'',ownerNote:''})
    }
  
    useEffect(() => {
      setValid(() => ({
        ['freelancerId']: request.freelancerId > 0 ? true : false,
        ['jobId']: request.jobId > 0 ? true : false,
        ['ownerNote']: request.ownerNote.length > 0 ? true : false,
      }))
      validation()
    }, [request])
  

    useEffect(()=>{
      console.log(request)
    },[request])

    const sendOneRequest = ()=>{
      axios.post(`${process.env.API_URL}/hiringRequest`,{...request},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'New hiring request sent successfully.',icon:'success'})
        dispatch(addNewHiringRequest(res.data))
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
    <CustomModal show={show} toggle={toggle} title={`Send new hiring request`} >
      <CustomModal.Body>
        <section className="py-1">
            <div className='block sm:flex sm:space-x-2'>
            <DropDown mainLabel='Freelancer' isValid={isValid.freelancerId} hasLabel={true} label={'FaRiS ABUKHADER'}  hasData={true} handler={setFreelance} data={freelancerList.map((freelancer)=>{return {id:freelancer.user.id,title:freelancer.user.firstName+' '+freelancer.user.lastName}})} selectedId={request.freelancerName} selectedItem={request.freelancerId}/>
            <DropDown mainLabel='Target job' isValid={isValid.jobId} hasLabel={true} label={'Nextjs developer'} hasData={true} handler={setJob} data={jobList.map((job)=>{return {id:job.id,title:job.title}})} selectedId={request.jobId} selectedItem={request.jobName}/>
            </div>
            <InputWithLabel label={`Description`} isTextArea={true} isValid={isValid.ownerNote} name={`ownerNote`} value={request.ownerNote} inputHandler={inputHandler} />
            <InputWithLabel label={`salary`} isValid={isValid.salary} name={`salary`} value={request.salary} inputHandler={inputHandler} />
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={sendOneRequest} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
