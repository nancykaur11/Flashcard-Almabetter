import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    update: (state) => !state,
  },
});

export const { update } = theme.actions;

export default theme.reducer;
