import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../modelSlice'
export const store = configureStore({
  reducer: {
    modalReducer
  },
})