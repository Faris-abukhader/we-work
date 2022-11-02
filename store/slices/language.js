import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const languageSlice = createSlice({
  name: 'LanguageSlice',
  initialState,
  reducers: {
      setLanguage: (state,{payload}) =>{
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
      addNewLanguage: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneLanguage: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneLanguage: (state,{payload}) =>{
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
    return [...payload.language]
   }
  },
})


export const { setLanguage,sortById,sortByDate,sortByName,addNewLanguage,modifyOneLanguage,deleteOneLanguage} = languageSlice.actions

export default languageSlice.reducer