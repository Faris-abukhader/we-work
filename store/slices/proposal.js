import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const proposalSlice = createSlice({
  name: 'ProposalSlice',
  initialState,
  reducers: {
      setProposals: (state,{payload}) =>{
        if(payload !== undefined){
          return [...payload]
        }
        return state
      }, 
      sortById:(state) => {
          return state.sort((a, b) => a.id.localeCompare(b.id))
      },    
      sortByDate:(state) => {
        return state.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      },    
      sortByName:(state)=>{
        return state.sort((a, b) => a.name.localeCompare(b.name))
      },
      addNewProposal: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneProposal: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneProposal: (state,{payload}) =>{
         return  state.map((item)=>{
            if(item.id != payload.id){
              return item
            }
            return payload
          })
      },
  },
  extraReducers:{
   [HYDRATE]: (state,{payload}) =>{
    console.log(payload)
    return [...payload.proposal]
   }
  },
})


export const { setProposals,sortById,sortByDate,sortByName,addNewProposal,modifyOneProposal,deleteOneProposal} = proposalSlice.actions

export default proposalSlice.reducer