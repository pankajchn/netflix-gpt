import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearchComponent: false,
    gptMoviesNames: null,
    gptMoviesResultsOnTmdb: null,
  },
  reducers: {
    toggleGPTSearchComponent: (state) => {
      state.gptSearchComponent = !state.gptSearchComponent;
    },
    addGptMoviesResultsOnTmdb: (state, action) => {
      const { gptSearchMoviesNames, gptSearchResultsOnTmdb } = action.payload;
      state.gptMoviesNames = gptSearchMoviesNames;
      state.gptMoviesResultsOnTmdb = gptSearchResultsOnTmdb;
    },
    clearGptSearchResults: (state) => {
      state.gptMoviesNames = null;
      state.gptMoviesResultsOnTmdb = null;
    }
   
  },
});

export default gptSearchSlice.reducer;
export const { toggleGPTSearchComponent, addGptMoviesResultsOnTmdb, clearGptSearchResults } =
  gptSearchSlice.actions;
