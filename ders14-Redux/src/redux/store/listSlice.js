import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   text: '',
   lists: []
}
export const listSlice = createSlice({
   name: 'lists',
   initialState,
   reducers: {
      addForm: (state) => {
         state.lists = [...state.lists, state.text];
         // inputdaki deyer elave olundugu zaman inputun icinin bos olmasi ucun
         state.text = ""
      },
      // e.target.value-den aldigim deyeri action.payload deye verirem
      changeInput: (state, action) => {
         state.text = action.payload
      }
   }
})
export const { addForm, changeInput } = listSlice.actions;
export default listSlice.reducer