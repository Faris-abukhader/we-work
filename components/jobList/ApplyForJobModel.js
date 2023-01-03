import { useState, useEffect } from 'react'
import { CustomModal } from '../general/CustomModel'
import { InputWithLabel, CloseButton, ConfirmButton, CustomDropDown } from '../general/general'
import { timingOptions } from '../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { fireNotification } from '../../utils/utils'
export default function ApplyForJobModel({ show, toggle, jobId }) {
  const session = useSession()
  const userId = session.data?.user?.id
  const token = session.data?.user?.token
  const [disable, setDisable] = useState(true)
  const [isValid, setValid] = useState({ bid: false, timeNeeded: false, description: false })
  const [proposal, setProposal] = useState({ onwerId: '', jobId: '', bid: 0, timeNeeded: '', description: '' })

  useEffect(() => {
    if (show) {
      setProposal((prevs) => ({
        ...prevs,
        ['ownerId']: userId,
        ['jobId']: jobId
      }))
    }
  }, [show])

  const inputHandler = (e) => {
    setProposal((prevs) => ({
      ...prevs,
      [e.target.name]: e.target.value
    }))
  }

  const setTimeNeeded = (duration) => {
    setProposal((prevs) => ({
      ...prevs,
      ['timeNeeded']: duration
    }))
  }


  const validation = () => {
    if (isValid.bid && isValid.description && isValid.timeNeeded) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const reset = () => {
    setProposal({ onwerId: '', jobId: '', bid: 0, timeNeeded: '', description: '' })
  }

  useEffect(() => {
    setValid(() => ({
      ['bid']: proposal.bid > 0 ? true : false,
      ['description']: proposal.description.length > 0 ? true : false,
      ['timeNeeded']: proposal.timeNeeded.length > 0 ? true : false,
    }))
    validation()
  }, [proposal])


  const postOneProposal = () => {
    console.log(proposal)
    axios.post(`${process.env.API_URL}/proposal`, { ...proposal }, { headers: { token } })
      .then((res) => {
        fireNotification({ label: 'New proposal sent successfully.', icon: 'success' })
        toggle()
        reset()
        console.log(res)
      }).catch((err) => {
        fireNotification({ label: 'Something went wrong.', icon: 'error' })
        console.log(err)
      })
  }

  const close = () => {
    reset()
    toggle()
  }
  return (
    <CustomModal show={show} toggle={toggle} title={`Apply for job`} >
      <CustomModal.Body>
        <section className="py-1">
          <div className='w-full flex justify-between items-start space-x-2'>
            <InputWithLabel label={`Bid`} isValid={isValid.bid} name={`bid`} value={proposal.bid} type={'number'} inputHandler={inputHandler} />
            <CustomDropDown mainLabel='Time needed' isValid={isValid.timeNeeded} hasLabel={true} label={'Select a duration'} hasData={true} handler={setTimeNeeded} data={timingOptions} selectedItem={proposal.timeNeeded} />
          </div>
          <InputWithLabel label={`Description`} isValid={isValid.description} name={`description`} value={proposal.description} inputHandler={inputHandler} />
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={postOneProposal} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}
