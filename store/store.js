import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import ItemSlice from './slices/item'
import jobSlice from './slices/job'

const makeStore = ()=>configureStore({
  reducer: {
      item:ItemSlice,
      job:jobSlice
  },
})

export const wrapper = createWrapper(makeStore)