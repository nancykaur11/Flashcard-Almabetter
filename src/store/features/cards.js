import { createSlice } from "@reduxjs/toolkit";
import unique_Id_Patcher from "../../utils/unique_Patcher";

// Retrieve data from local storage
const persistedState = localStorage.getItem("cards")
  ? JSON.parse(localStorage.getItem("cards"))
  : [];

const initialState = persistedState;

const cards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action) => {
      const patched_Data = unique_Id_Patcher(action.payload);
      localStorage.setItem("cards", JSON.stringify([...state, patched_Data]));
      return [...state, patched_Data];
    },
  },
});

export const { add } = cards.actions;

export default cards.reducer;
