import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const jobSlice = createSlice({
  name: 'JobSlice',
  initialState,
  reducers: {
      setJobs: (state,{payload}) =>{
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
      addNewJob: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneJob: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneJob: (state,{payload}) =>{
         return  state.map((item)=>{
            if(item.id != payload.id){
              return item
            }
            return payload
          })
      },
      modifyOneProposal:(state,{payload})=>{
        return state.map((item)=>{
          if(item.id != payload.jobId){
            return item
          }
          console.log('target job is ')
          console.log(item)
          item.proposalList.map((proposal)=>{
            if(proposal.id != payload.id){
              return proposal
            }
            console.log('target proposal is ')
            console.log(proposal)
            return payload
          })
        })
      }
  },
  extraReducers:{
   [HYDRATE]: (state,{payload}) =>{
    console.log(payload)
    return [...payload.job]
   }
  },
})


export const { setJobs,sortById,sortByDate,sortByName,addNewJob,modifyOneJob,modifyOneProposal,deleteOneJob} = jobSlice.actions

export default jobSlice.reducer