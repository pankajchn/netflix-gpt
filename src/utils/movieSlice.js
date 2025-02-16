import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    trendingMovies: null,
    youtubeVedio : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addYoutubeVedio: (state, action)=> {
      state.youtubeVedio = action.payload
    }
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailerVedio,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
  addYoutubeVedio
} = movieSlice.actions;
