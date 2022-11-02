import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const educationSlice = createSlice({
  name: 'EducationSlice',
  initialState,
  reducers: {
      setEducation: (state,{payload}) =>{
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
      addNewEducation: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneEducation: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneEducation: (state,{payload}) =>{
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
    return [...payload.education]
   }
  },
})


export const { setEducation,sortById,sortByDate,sortByName,addNewEducation,modifyOneEducation,deleteOneEducation} = educationSlice.actions

export default educationSlice.reducer