import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import hiringRequestSlice from './slices/hiringRequest'
import ItemSlice from './slices/item'
import jobSlice from './slices/job'
import proposalSlice from './slices/proposal'

const makeStore = ()=>configureStore({
  reducer: {
      item:ItemSlice,
      job:jobSlice,
      proposal:proposalSlice,
      hiringRequest:hiringRequestSlice,
  },
})

export const wrapper = createWrapper(makeStore)