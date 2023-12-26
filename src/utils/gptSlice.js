import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showSearch:false
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    
  },
});

export const { toggleGPTSearchView } = gptSlice.actions;
export default gptSlice.reducer;
