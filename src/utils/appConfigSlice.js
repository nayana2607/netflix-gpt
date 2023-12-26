import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    theme: "light",
    lang: "en",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {changeLanguage,changeTheme}=appConfigSlice.actions;
export default appConfigSlice.reducer;