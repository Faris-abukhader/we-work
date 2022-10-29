import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,SegimentPicker,CustomDropDown,EditButton} from '../../general/general'
import {citiesList,jobCategories} from '../../../utils/utils'
import Image from 'next/image'
export default function ReviewJobModel({show, toggle, data ,setJobUpdateId}) {
    const [job,setJob] = useState({title:'',location:'',description:'',salary:'',skillRequired:'',jobCategory:''})

    useEffect(()=>{
        if(show){
            setJob({
                title:data?.title,location:data?.location,description:data?.description,salary:data?.salary,skillRequired:data?.skillRequired,jobCategory:data?.jobCategory 
            })
        }
    },[show])

  return (
    <CustomModal show={show} toggle={toggle} title={`Review Job`} >
      <CustomModal.Body>
        <section className="py-1">
          <div className='grid grid-cols-1 w-full space-y-3'>
            <div className='flex justify-end'>
              <EditButton clickHandler={()=>setJobUpdateId(data?.id)}/>
            </div>
            <InputWithLabel label={`Job Title`} name={`title`} value={job.title} hasHandler={false} />
            <InputWithLabel label={`Job Description`} isTextArea={true} name={`description`} value={job.description} hasHandler={false}  />
            <div className='block sm:flex sm:space-x-2'>
            <CustomDropDown mainLabel='Job location' hasLabel={true} label={'Amman, Jordan'} isReview={true}  hasData={true} data={citiesList.map((item)=>{return item.name})} hasHandler={false}  selectedItem={job.location}/>
            <CustomDropDown mainLabel='Job category' hasLabel={true} label={'job category'} isReview={true}  hasData={true} data={jobCategories} hasHandler={false}  selectedItem={job.jobCategory}/>
            </div>
            <div className='block sm:flex sm:space-x-2'>
            <InputWithLabel label={`Salary`} type={`number`} name={`salary`} value={job.salary} hasHandler={false} />
            <SegimentPicker label={`Skill required`} name={`skillRequired`} value={job.skillRequired} hasHandler={false} isReview={true}/>
            </div>
          </div>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={toggle}>{`Close`}</CloseButton>
      </CustomModal.Footer>
    </CustomModal>
  )}
