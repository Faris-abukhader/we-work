import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddEmploymentModel, UpdateEmploymentModel } from './profile'
import { AddButton, DeleteButton, Location, ModifyButton } from '../../general/general'
import axios from 'axios'
import { fireNotification } from '../../../utils/utils'
import { deleteOneEmploymentHistory as deleteEmploymentHistory } from '../../../store/slices/employmentHistory'
export default function EmploymentHistory({isReview=false}) {
    const employmentHistory = useSelector((state) => state.employmentHistory)
    const dispatch = useDispatch()
    const [showAddModel, setShowAddModel] = useState(false)
    const [showEditModel, setShowEditModel] = useState(false)
    const [editModelData, setEditModelData] = useState({})


    const toggleAddModel = () => {
        setShowAddModel(!showAddModel)
    }

    const toggleEditModel = (id) => {
        setEditModelData(employmentHistory.filter((certification) => certification.id == id)[0])
        setShowEditModel(!showEditModel)
    }

    const deleteOneEmploymentHistory = (id) => {
        axios.delete(`${process.env.API_URL}/employmentHistory/${id}`)
            .then((res) => {
                console.log(res.data)
                fireNotification({ label: 'Employment History record deleted successfully.', icon: 'success' })
                dispatch(deleteEmploymentHistory(res.data.id))
            })
            .catch((err) => {
                fireNotification({ label: 'Something went wrong.', icon: 'error' })
                console.log(err)
            })
    }
    return (
        <div className='p-4 mt-5 border-2 rounded-2xl'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl '><b>Employment History</b></h1>
                {!isReview &&<AddButton onClick={toggleAddModel} />}
            </div>
            {employmentHistory.length>0 ? employmentHistory.map((employment) => <div className='text-gray-600 flex items-center justify-between py-6' key={employment.id}>
                <div className='space-y-1'>
                    <h1 className='text-lg text-gray-800'>{employment.companyName}</h1>
                    <h2 className='text-md'>position : {employment.position}</h2>
                    <Location iconSize={12} textSize='text-xs' location={employment.country+','+employment.city}/>
                    <h4 className='text-xs'>working period : {new Date(employment.fromDate).toLocaleDateString()} - {new Date(employment.untilDate).toLocaleDateString()}</h4>
                    {employment.description?.length > 1 && <p className='text-xs'>description : {employment.description}</p>}
                </div>
                <div className='flex space-x-3'>
                    {!isReview &&<ModifyButton onClick={toggleEditModel} id={employment.id} />}
                    {! isReview &&<DeleteButton onClick={deleteOneEmploymentHistory} id={employment.id} />}
                </div>

            </div>)
            :
            <p className='text-center text-xs text-gray-600 py-4'>{isReview ? `This user didn't have any employment history.`:`You don't have any emploment added yet.`}</p>
            }
            {!isReview &&<AddEmploymentModel show={showAddModel} toggle={toggleAddModel} />}
            {!isReview &&<UpdateEmploymentModel show={showEditModel} toggle={toggleEditModel} data={editModelData} />}
        </div>
    )
}
