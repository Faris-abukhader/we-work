import {useState,useEffect} from 'react'
import {CustomModal} from '../../general/CustomModel'
import {InputWithLabel,CloseButton,CustomDropDown,EditButton} from '../../general/general'
import {timingOptions} from '../../../utils/utils'
export default function ReviewProposalModel({show,toggle,data ,setProposalUpdateId}) {
    const [proposal,setProposal] = useState({bid: 0, timeNeeded: '', description: ''})

    useEffect(()=>{
        if(show){
            setProposal({bid:data?.bid,timeNeeded:data?.timeNeeded,description:data?.description })
        }
    },[show])

  return (
    <CustomModal show={show} toggle={toggle} title={`Review Proposal`} >
      <CustomModal.Body>
      <section className="py-1">
         <div className='flex justify-end'>
              <EditButton clickHandler={()=>setProposalUpdateId(data.id)}/>
            </div>
          <div className='w-full flex justify-between items-start space-x-2'>
            <InputWithLabel label={`Bid`} name={`bid`} value={proposal.bid} type={'number'} hasHandler={false} />
            <CustomDropDown mainLabel='Time needed' isReview={true} hasLabel={true} label={'Select a duration'} hasData={true} hasHandler={false} data={timingOptions} selectedItem={proposal.timeNeeded} />
          </div>
          <InputWithLabel label={`Description`} name={`description`} value={proposal.description} hasHandler={false}/>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={toggle}>{`Close`}</CloseButton>
      </CustomModal.Footer>
    </CustomModal>
  )}
