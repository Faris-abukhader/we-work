import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import InputWithLabel from '../../general/InputWithLabel'
import CloseButton from '../../general/CloseButton'
import ConfirmButton from '../../general/ConfirmButton'
import SegimentPicker from '../../general/SegmentsPicker'
export default function AddNewJobModel( {show, toggle}) {
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({ title:false,location:false,description:false,salary:false,skillRequired:false,jobCategory:false })
    const [job,setJob] = useState({title:'',location:'',description:'',salary:'',skillRequired:'',jobCategory:''})


    const inputHandler = (e) => {
      setJob((prevs) => ({
        ...prevs,
        [e.target.name]: e.target.value
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
      setItemGroup({title:'',location:'',description:'',price:'',skillRequired:'',jobCategory:''})
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
  


    const postOneJob = ()=>{

    }
  return (
    <CustomModal show={show} toggle={toggle} title={`Post new Job`} >
      <CustomModal.Body>
        <section className="py-1">
          <div className='grid grid-cols-1 w-full'>
            <InputWithLabel label={`Job Title`} isValid={isValid.title} name={`title`} value={job.title} inputHandler={inputHandler} />
            <InputWithLabel label={`Job Description`} isTextArea={true} isValid={isValid.description} name={`description`} value={job.description} inputHandler={inputHandler} />
            <div className='block sm:flex sm:space-x-2'>
            <InputWithLabel label={`Job location`} isValid={isValid.location} name={`location`} value={job.location} inputHandler={inputHandler} />
            <SegimentPicker label={`Skill required`} isValid={isValid.skillRequired} name={`skillRequired`} value={job.skillRequired} handler={(value)=>setJob((prevs)=>({...prevs,['skillRequired']:value}))}/>
            </div>
            <div className='block sm:flex sm:space-x-2'>
            <InputWithLabel label={`Salary`} type={`number`} isValid={isValid.salary} name={`salary`} value={job.salary} inputHandler={inputHandler} />
            <InputWithLabel label={`Job category`} isValid={isValid.jobCategory} name={`jobCategory`} value={job.jobCategory} inputHandler={inputHandler} />
            </div>

          </div>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={toggle}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={postOneJob} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
