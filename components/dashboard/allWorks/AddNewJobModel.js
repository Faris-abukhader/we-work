import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,ConfirmButton,SegimentPicker,CustomDropDown} from '../../general/general'
import {citiesList,jobCategories} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import {fireNotification} from '../../../utils/utils'
import { useDispatch } from 'react-redux'
import { addNewJob } from '../../../store/slices/job'
export default function AddNewJobModel( {show, toggle}) {
    const session = useSession()
    const dispatch = useDispatch()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({ title:false,location:false,description:false,salary:false,skillRequired:false,jobCategory:false })
    const [job,setJob] = useState({title:'',location:'',description:'',salary:'',skillRequired:'',jobCategory:''})

    const inputHandler = (e) => {
      setJob((prevs) => ({
        ...prevs,
        [e.target.name]: e.target.value
      }))
    }

    const setLocation = (location)=>{
      setJob((prevs)=>({
        ...prevs,
        ['location']:location
      }))
    }

    const setCategory = (category)=>{
      setJob((prevs)=>({
        ...prevs,
        ['jobCategory']:category
      }))
    }

    const setRequiredSkill = (skills)=>{
      setJob((prevs)=>({
        ...prevs,
        ['skillRequired']:skills
      }))
    }
    
    const validation = () => {
      if (isValid.title && isValid.description && isValid.location && isValid.salary && isValid.skillRequired && isValid.jobCategory) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
      setJob({title:'',location:'',description:'',salary:'',skillRequired:'',jobCategory:''})
    }
  
    useEffect(() => {
      setValid(() => ({
        ['title']: job.title.length > 0 ? true : false,
        ['description']: job.description.length > 0 ? true : false,
        ['location']: job.location.length > 0 ? true : false,
        ['salary']: Number(job.salary) > 0 ? true : false,
        ['skillRequired']: job.skillRequired.length > 0 ? true : false,
        ['jobCategory']: job.jobCategory.length > 0 ? true : false,
      }))
      validation()
    }, [job])
  

    useEffect(()=>{
      console.log(job)
    },[job])

    const postOneJob = ()=>{
      axios.post(`${process.env.API_URL}/job/${userId}`,{...job},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'New job post successfully.',icon:'success'})
        dispatch(addNewJob(res.data))
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
    <CustomModal show={show} toggle={toggle} title={`Post new Job`} >
      <CustomModal.Body>
        <section className="py-1">
          <div className='grid grid-cols-1 w-full space-y-3'>
            <InputWithLabel label={`Job Title`} isValid={isValid.title} name={`title`} value={job.title} inputHandler={inputHandler} />
            <InputWithLabel label={`Job Description`} isTextArea={true} isValid={isValid.description} name={`description`} value={job.description} inputHandler={inputHandler} />
            <div className='block sm:flex sm:space-x-2'>
            <CustomDropDown mainLabel='Job location' isValid={isValid.location} hasLabel={true} label={'Amman, Jordan'}  hasData={true} handler={setLocation} data={citiesList.map((item)=>{return item.name})} selectedItem={job.location}/>
            <CustomDropDown mainLabel='Job category' isValid={isValid.jobCategory} hasLabel={true} label={'job category'} hasData={true} handler={setCategory} data={jobCategories} selectedItem={job.jobCategory}/>
            </div>
            <div className='block sm:flex sm:space-x-2'>
            <InputWithLabel label={`Salary`} type={`number`} isValid={isValid.salary} name={`salary`} value={job.salary} inputHandler={inputHandler} />
            <SegimentPicker label={`Skill required`} isValid={isValid.skillRequired} name={`skillRequired`} value={job.skillRequired} handler={setRequiredSkill}/>
            </div>
          </div>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={postOneJob} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
