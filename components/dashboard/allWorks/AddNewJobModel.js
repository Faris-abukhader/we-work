import  { useState } from 'react'
import { CustomModal } from '../../general/CustomModel'
import InputWithLabel from '../../general/InputWithLabel'
import CloseButton from '../../general/CloseButton'
import ConfirmButton from '../../general/ConfirmButton'
export default function AddNewJobModel( {show, toggle}) {
    const [disable,setDisable] = useState(true)


    const postOneJob = ()=>{

    }
  return (
    <CustomModal show={show} toggle={toggle} title={`Post new Job`} >
      <CustomModal.Body>
        <section className="py-1">
          <div className='grid grid-cols-1 w-full'>
            {/* <InputWithLabel label={`name`} isValid={isValid.name} name={`name`} value={itemGroup.name} inputHandler={inputHandler} /> */}
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
