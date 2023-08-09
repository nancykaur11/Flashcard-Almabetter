import { createSlice } from "@reduxjs/toolkit";
import unique_Id_Patcher from "../../utils/unique_Patcher";

const initialState = [];

const cards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action) => {
      const patched_Data = unique_Id_Patcher(action.payload);
      return [...state, patched_Data];
    },
  },
});

export const { add } = cards.actions;

export default cards.reducer;
