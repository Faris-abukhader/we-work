import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = []

export const productSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
      setProducts: (state,{payload}) =>{
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
      addNewProduct: (state,{payload}) =>{
          state.push(payload)
      }, 
      deleteOneProduct: (state,{payload}) =>{
        return state.filter((item)=>item.id!=payload)
      },
      modifyOneProduct: (state,{payload}) =>{
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
    return [...payload.product]
   }
  },
})


export const { setProducts,sortById,sortByDate,sortByName,addNewProduct,modifyOneProduct,deleteOneProduct} = productSlice.actions

export default productSlice.reducer