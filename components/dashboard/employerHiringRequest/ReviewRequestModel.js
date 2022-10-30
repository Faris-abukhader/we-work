import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,DropDown,EditButton} from '../../general/general'
export default function ReviewRequestModel({show, toggle, data ,setRequestUpdateId,freelancerList,jobList}) {
  const [request,setRequest] = useState({freelancerId:'',freelancerName:'',jobId:'',jobName:'',ownerNote:''})

    useEffect(()=>{
        if(show){
            setRequest({freelancerId:data?.freelancerId,freelancerName:data?.freelancer?.user?.firstName,jobId:data?.jobId,jobName:data?.job?.title,ownerNote:data?.ownerNote})
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
            <div className='block sm:flex sm:space-x-2 pb-2'>
            <DropDown mainLabel='Freelancer'  hasLabel={true} label={'FaRiS ABUKHADER'}  hasData={true} isReview={true} hasHandler={false} data={freelancerList.map((freelancer)=>{return {id:freelancer.user.id,title:freelancer.user.firstName+' '+freelancer.user.lastName}})} selectedId={request.freelancerId} selectedItem={request.freelancerName}/>
            <DropDown mainLabel='Target job'  hasLabel={true} label={'Nextjs developer'} hasData={true} isReview={true} hasHandler={false} data={jobList.map((job)=>{return {id:job.id,title:job.title}})} selectedId={request.jobId} selectedItem={request.jobName}/>
            </div>
            <InputWithLabel label={`Description`} isTextArea={true} name={`ownerNote`} value={request.ownerNote} hasHandler={false} />
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={toggle}>{`Close`}</CloseButton>
      </CustomModal.Footer>
    </CustomModal>
  )}
