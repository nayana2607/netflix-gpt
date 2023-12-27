import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies:null,
    trailers: null,

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies:(state,action)=>{
      state.trendingMovies=action.payload;
    },
    addTrailers: (state, action) => {
      state.trailers = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addTrailers,addTrendingMovies } = movieSlice.actions;
export default movieSlice.reducer;
