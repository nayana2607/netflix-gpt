import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailers: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailers: (state, action) => {
      state.trailers = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addTrailers } = movieSlice.actions;
export default movieSlice.reducer;
