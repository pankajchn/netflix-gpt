import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearchComponent: false,
  },
  reducers: {
    toggleGPTSearchComponent: (state) => {
      state.gptSearchComponent = !state.gptSearchComponent;
    },
  },
});

export default gptSearchSlice.reducer;
export const { toggleGPTSearchComponent } = gptSearchSlice.actions;
