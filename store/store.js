import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import ItemSlice from './slices/item'
import jobSlice from './slices/job'
import proposalSlice from './slices/proposal'

const makeStore = ()=>configureStore({
  reducer: {
      item:ItemSlice,
      job:jobSlice,
      proposal:proposalSlice
  },
})

export const wrapper = createWrapper(makeStore)