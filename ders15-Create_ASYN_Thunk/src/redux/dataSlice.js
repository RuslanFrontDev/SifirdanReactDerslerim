import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
   data: [],
   loading: false,
   error: ''
}
 export const fetchDatas = createAsyncThunk(
   'datas',
   async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const datas = await response.json();
      return datas;
   }
)

export const  dataSlice = createSlice({
   name:'datas',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
      builder.addCase(fetchDatas.pending, (state, action)=>{
         state.loading = true;
         state.error = ""
      });
      builder.addCase(fetchDatas.fulfilled, (state, action)=>{
         state.data = action.payload;
         state.loading = false;
      });
      builder.addCase(fetchDatas.rejected, (state, action)=>{
         state.loading = false;
         state.error = "Error verdi"
      });
   }
})
export default dataSlice.reducer