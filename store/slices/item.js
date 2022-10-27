import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const ItemSlice = createSlice({
  name: 'ItemSlice',
  initialState,
  reducers: {
    setItems: (state,{payload}) =>{
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
      addNewItem: (state,{payload}) =>{
          return [...state,payload]
      }, 
      deleteOneItem: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneItem: (state,{payload}) =>{
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
    return [...payload.item]
   }
  },
})


export const { setItems,sortById,sortByDate,sortByName,addNewItem,modifyOneItem,deleteOneItem } = ItemSlice.actions

export default ItemSlice.reducer