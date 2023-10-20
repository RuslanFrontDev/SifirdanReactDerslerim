import { configureStore } from '@reduxjs/toolkit';
import listReducer from "./listSlice"
export const store = configureStore({
   reducer: {
      // redux-daki state-ler ile elaqe yaratmaq ucun bir deyisken yaziriq
      listStore: listReducer
   },
})