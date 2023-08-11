import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("theme")) || false;

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    update: (state) => {
      localStorage.setItem("theme", JSON.stringify(!state));
      return !state;
    },
  },
});

export const { update } = theme.actions;

export default theme.reducer;
