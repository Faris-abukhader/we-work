import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const employmentHistorySlice = createSlice({
  name: 'EmploymentHistory',
  initialState,
  reducers: {
      setEmploymentHistory: (state,{payload}) =>{
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
      addNewEmploymentHistory: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneEmploymentHistory: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneEmploymentHistory: (state,{payload}) =>{
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
    return [...payload.employmentHistory]
   }
  },
})


export const { setEmploymentHistory,sortById,sortByDate,sortByName,addNewEmploymentHistory,modifyOneEmploymentHistory,deleteOneEmploymentHistory} = employmentHistorySlice.actions

export default employmentHistorySlice.reducer