import {AcceptButton,DeclineButton} from '../../general/general'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { modifyOneProposal } from '../../../store/slices/job'
export default function ProposalList({data=[]}) {
    const dispatch = useDispatch()
    const acceptProposal = (id)=>{
        console.log(id)
        axios.put(`${process.env.API_URL}/proposal/accept/${id}`)
        .then((res)=>{
          dispatch(modifyOneProposal(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const declineProposal = (id)=>{
        axios.put(`${process.env.API_URL}/proposal/decline/${id}`)
        .then((res)=>{
            dispatch(modifyOneProposal(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <h1 className="font-bold py-2 ">Proposals list</h1>
        {data.length>0 && data.map((item)=><div className='flex justify-between border rounded-md p-2' key={item.id}>
            <div className="text-xs text-gray-600">
                <h1 >from : <b className="text-black">{item?.freelancer?.user?.firstName+' '+item?.freelancer?.user?.lastName}</b></h1>
                <h3>Bid : <b className="text-black">{item.bid}</b></h3>
                <p>Description : {item.description}</p>
                <p>Status : {(!item.isAccept && !item.isDecline) ? 'pending':(item.isAaccept ?'accepted':'declined')}</p>
            </div>
            <div className='flex justify-center items-center'>
                <AcceptButton clickHandler={()=>acceptProposal(item.id)} width={20} height={20}/>
                <DeclineButton clickHandler={()=>declineProposal(item.id)} width={20} height={20}/>
            </div>
        </div>)}
    </div>
  )
}
