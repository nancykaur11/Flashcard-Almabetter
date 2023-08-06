import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action) => [...state, action.payload],
  },
});

export const { add } = cards.actions;

export default cards.reducer;
