import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import certificationSlice from './slices/certification'
import educationSlice from './slices/education'
import hiringRequestSlice from './slices/hiringRequest'
import ItemSlice from './slices/item'
import jobSlice from './slices/job'
import languageSlice from './slices/language'
import productSlice from './slices/product'
import proposalSlice from './slices/proposal'
import employmentHistorySlice from './slices/employmentHistory'
const makeStore = ()=>configureStore({
  reducer: {
      item:ItemSlice,
      job:jobSlice,
      proposal:proposalSlice,
      hiringRequest:hiringRequestSlice,
      product:productSlice,
      language:languageSlice,
      education:educationSlice,
      certification:certificationSlice,
      employmentHistory:employmentHistorySlice
  },
})

export const wrapper = createWrapper(makeStore)