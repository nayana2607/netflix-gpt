import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showSearch:false,
    recommendedMovies:null,
    recommendedResult:null
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    addRecommendedMovies:(state,action)=>{
      const {recommendation,results}=action.payload
      state.recommendedMovies=recommendation
      state.recommendedResult=results
    },
    clearSlice:(state)=>{
      state.recommendedMovies=null
      state.recommendedResult=null
    }
  },
});

export const { toggleGPTSearchView,addRecommendedMovies,clearSlice } = gptSlice.actions;
export default gptSlice.reducer;
