import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice"
import appConfigSlice from "./appConfigSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:movieReducer,
    gpt:gptReducer,
    appConfig:appConfigSlice,
  },
});
