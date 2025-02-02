import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVedio } = movieSlice.actions;
