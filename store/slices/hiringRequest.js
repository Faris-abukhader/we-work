import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const hiringRequestSlice = createSlice({
  name: 'HiringSlice',
  initialState,
  reducers: {
      setHiringRequests: (state,{payload}) =>{
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
      addNewHiringRequest: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneHiringRequest: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneHiringRequest: (state,{payload}) =>{
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
    return [...payload.hiringRequest]
   }
  },
})


export const { setHiringRequests,sortById,sortByDate,sortByName,addNewHiringRequest,modifyOneHiringRequest,deleteOneHiringRequest} = hiringRequestSlice.actions

export default hiringRequestSlice.reducer