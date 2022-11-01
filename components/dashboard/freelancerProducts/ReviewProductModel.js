import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,EditButton} from '../../general/general'
export default function ReviewProductModel({show, toggle, data ,setProductUpdateId}) {
  const [product,setProduct] = useState({ownerName:'',jobTitle:'',employerRate:0,content:''})

    useEffect(()=>{
        if(show){
            setProduct({ownerName:data?.hiringRequest?.owner?.user?.firstName+' '+data?.hiringRequest?.owner?.user?.lastName,jobTitle:data?.hiringRequest?.job?.title,employerRate:data?.employerRate,content:data?.content})
            console.log(data)
        }
    },[show])

  return (
    <CustomModal show={show} toggle={toggle} title={`Review product`} >
      <CustomModal.Body>
      <section className="py-1">
         <div className='flex justify-end'>
            <EditButton clickHandler={()=>setProductUpdateId(data?.id)}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
          <InputWithLabel label={`Employer name`} name={`ownerName`} value={product.ownerName} hasHandler={false} />
          <InputWithLabel label={`Job title`} name={`jobTitle`} value={product.jobTitle} hasHandler={false} />
          <InputWithLabel label={`Eemployer rate`} name={`isEmployerAccepet`} value={product.employerRate} hasHandler={false} />
          </div> 
          <InputWithLabel label={`Product content`} isTextArea={true} name={`ownerNote`} value={product.content} hasHandler={false} />
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={toggle}>{`Close`}</CloseButton>
      </CustomModal.Footer>
    </CustomModal>
  )}