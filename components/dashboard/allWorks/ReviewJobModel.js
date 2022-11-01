import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,SegimentPicker,CustomDropDown,EditButton, ConfirmButton} from '../../general/general'
import {citiesList,jobCategories,fireNotification} from '../../../utils/utils'
import Rating from 'react-rating'
import Image from 'next/image'
import axios from 'axios'
export default function ReviewJobModel({show, toggle, data ,setJobUpdateId,token}) {
    const [job,setJob] = useState({title:'',location:'',description:'',salary:'',skillRequired:'',jobCategory:'',isHired:false,product:'',productRate:0})
    
    useEffect(()=>{
        if(show){
            setJob({
                title:data?.title,location:data?.location,description:data?.description,salary:data?.salary,skillRequired:data?.skillRequired,jobCategory:data?.jobCategory ,isHired:data?.hiringRequest?.product ? true:false,product:data?.hiringRequest?.product?.content,productRate:data?.hiringRequest?.product?.employerRate})
        }
    },[show])

    const setRate = (rate)=>{
      setJob((prevs)=>({
        ...prevs,
        ['productRate']:rate
      }))
    }

    const rateProduct = async()=>{
      let rate = {employerRate:job.productRate}
      console.log(rate)
      axios.put(`${process.env.API_URL}/product/rate/${data.id}`,{...rate},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'Product rated successfully.',icon:'success'})
        toggle()
        console.log(res)
      }).catch((err) => {
        fireNotification({label:'Something went wrong.',icon:'error'})
        console.log(err)
      })

    }

    useEffect(()=>{
      console.log(job)
    },[job])

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
          {job.isHired && <div className='pt-4 border-t '>
            <InputWithLabel label={`Product`} isTextArea={true} name={`product`} value={job.product} hasHandler={false} />
            <div className='flex items-center space-x-2'>
            <Rating 
              onChange={(rate)=>setRate(rate)}
              initialRating={job.productRate}
              emptySymbol={<Image src="/icons/emptyStar.svg" width={20} height={20} alt='star'/>}
              placeholderSymbol={<Image src="/icons/emptyStar.svg" width={20} height={20} alt='star' />}
              fullSymbol={<Image src="/icons/fullStar.svg"width={20} height={20} alt='star'  />}/>
             <button onClick={rateProduct} className='px-2 py-1 border rounded-lg text-sm hover:border-2'>{job.productRate == 0 ?'Rate now!':'Rate again!'}</button>
            </div>
            </div>
             }
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={toggle}>{`Close`}</CloseButton>
      </CustomModal.Footer>
    </CustomModal>
  )}
