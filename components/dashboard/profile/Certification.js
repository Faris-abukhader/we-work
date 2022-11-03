import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddNewCertificationModel, UpdateCertificationModel } from './profile'
import { AddButton, DeleteButton, ModifyButton } from '../../general/general'
import axios from 'axios'
import { fireNotification } from '../../../utils/utils'
import { deleteOneCertification as deleteCertification } from '../../../store/slices/certification'
export default function Certification() {
    const certifications = useSelector((state) => state.certification)
    const dispatch = useDispatch()
    const [showAddModel, setShowAddModel] = useState(false)
    const [showEditModel, setShowEditModel] = useState(false)
    const [editModelData, setEditModelData] = useState({})


    const toggleAddModel = () => {
        setShowAddModel(!showAddModel)
    }

    const toggleEditModel = (id) => {
        console.log(certifications.filter((certification) => certification.id == id)[0])
        setEditModelData(certifications.filter((certification) => certification.id == id)[0])
        setShowEditModel(!showEditModel)
    }

    const deleteOneCertification = (id) => {
        axios.delete(`${process.env.API_URL}/certification/${id}`)
            .then((res) => {
                console.log(res.data)
                fireNotification({ label: 'Certification had deleted successfully.', icon: 'success' })
                dispatch(deleteCertification(res.data.id))
            })
            .catch((err) => {
                fireNotification({ label: 'Something went wrong.', icon: 'error' })
                console.log(err)
            })
    }
    return (
        <div className='p-4 mt-5 border-2 rounded-2xl'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl '><b>Certifications</b></h1>
                <AddButton onClick={toggleAddModel} />
            </div>
            {certifications && certifications.map((certification) => <div className='text-gray-600 flex items-center justify-between py-4' key={certification.id}>
                <div>
                    <h1 className='text-lg text-gray-800'>{certification.name}</h1>
                    <h2 className='text-sm'>from : {certification.fromWhere}</h2>
                    <h4 className='text-xs'>issued date : {new Date(certification.issuedDate).toLocaleDateString()}</h4>
                    {certification.description && <p className='text-xs'>description : {certification.description}</p>}
                </div>
                <div className='flex space-x-3'>
                    <ModifyButton onClick={toggleEditModel} id={certification.id} />
                    <DeleteButton onClick={deleteOneCertification} id={certification.id} />
                </div>

            </div>)}
            <AddNewCertificationModel show={showAddModel} toggle={toggleAddModel} />
            <UpdateCertificationModel show={showEditModel} toggle={toggleEditModel} data={editModelData} />
        </div>
    )
}
