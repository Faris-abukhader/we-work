import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const certificationSlice = createSlice({
  name: 'CertificationSlice',
  initialState,
  reducers: {
      setCertification: (state,{payload}) =>{
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
      addNewCertification: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneCertification: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneCertification: (state,{payload}) =>{
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
    return [...payload.certification]
   }
  },
})


export const { setCertification,sortById,sortByDate,sortByName,addNewCertification,modifyOneCertification,deleteOneCertification} = certificationSlice.actions

export default certificationSlice.reducer