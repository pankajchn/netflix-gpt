import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSearchReducer from "./gptSearchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gptSearch: gptSearchReducer,
  },
});

export default appStore;
