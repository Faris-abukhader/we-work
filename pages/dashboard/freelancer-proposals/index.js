import { useState } from 'react'
import Layout from '../../../components/layout/UserLayout'
import { NoDataFound } from '../../../components/general/general'
import { ProposalCard, ReviewProposalModel,EditProposalModel } from '../../../components/dashboard/freelancerProposals/freelancerProposals'
import { setProposals } from '../../../store/slices/proposal'
import { getSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { wrapper } from '../../../store/store'
import axios from 'axios'
export default function Index() {
  const proposalList = useSelector((state) => state.proposal)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviewModalData, setReviewModalData] = useState({})
  const [updateModalData, setUpdateModalData] = useState({})

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  const toggleReviewModal = (id = '') => {
    setReviewModalData(proposalList.find((item) => item.id == id) || {})
    setShowReviewModal(!showReviewModal)
  }

  const setPorposalUpdateId = (id) => {
    setUpdateModalData(proposalList.find((item) => item.id == id))
    toggleReviewModal()
    toggleEditModal()
  }


  return (
    <Layout accountType='f' current='Proposals'>
      <div className='w-full h-80 py-10 flex justify-center'>
        <div className='w-full px-2 md:px-20 space-y-4'>
          {proposalList.length > 0 ?
            proposalList.map((item) => <ProposalCard toggleReviewJobModal={toggleReviewModal} key={item.id} {...item} />)
            :
            <NoDataFound label={`You don't have any proposal sent yet.`} />
          }
        </div>
      </div>
      <ReviewProposalModel show={showReviewModal} toggle={toggleReviewModal} data={reviewModalData} setProposalUpdateId={setPorposalUpdateId} />
      <EditProposalModel show={showEditModal} toggle={toggleEditModal} data={updateModalData} />
    </Layout>

  )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)
  const userAccount = session.user?.accountType

  if (userAccount == 'f') {
    console.log('*************')
    console.log(session.user)
    const proposalRequest = await axios.get(`${process.env.API_URL}/proposal/freelancer/${session.user.id}`)
    const proposalList = proposalRequest.data.data
    store.dispatch(setProposals(proposalList))

    return {
      props: {}
    }
  } else {
    return {
      redirect: {
        destination: '/dashboard'
      },
      props: {}
    }
  }
})

