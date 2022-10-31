import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,EditButton} from '../../general/general'
export default function ReviewRequestModel({show, toggle, data ,setRequestUpdateId,freelancerList,jobList}) {
  const [request,setRequest] = useState({jobTitle:'',ownerNote:'',freelancerNote:'',isEmployerAccepet:false,isFreelancerAccept:false,salary:0})

    useEffect(()=>{
        if(show){
          setRequest({jobTitle:data?.job?.title,ownerNote:data?.ownerNote,freelancerNote:data?.freelancerNote,isEmployerAccepet:data?.isEmployerAccepet,isFreelancerAccept:data?.isFreelancerAccept,salary:data?.salary})
          console.log(data)
        }
    },[show])

  return (
    <CustomModal show={show} toggle={toggle} title={`Review hiring request`} >
      <CustomModal.Body>
      <section className="py-1">
         <div className='flex justify-end'>
            <EditButton clickHandler={()=>setRequestUpdateId(data?.id)}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
          <InputWithLabel label={`Job title`} name={`jobTitle`} value={request.jobTitle} hasHandler={false} />
          <InputWithLabel label={`Salary`} name={`salary`} value={request.salary} hasHandler={false} />
          <InputWithLabel label={`Your note`} isTextArea={true} name={`ownerNote`} value={request.ownerNote} hasHandler={false} />
          <InputWithLabel label={`Did you accepet`} name={`isEmployerAccepet`} value={request.isEmployerAccepet?'accepted':'refused'} hasHandler={false} />
          <InputWithLabel label={`Freelancer note`} isTextArea={true} name={`freelancerNote`} value={request.freelancerNote} hasHandler={false} />
          <InputWithLabel label={`Did freelancer accept`} name={`isFreelancerAccepet`} value={request.isFreelancerAccept?'accepted':'refused'} hasHandler={false} />
          </div> 
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={toggle}>{`Close`}</CloseButton>
      </CustomModal.Footer>
    </CustomModal>
  )}

