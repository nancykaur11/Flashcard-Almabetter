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
      // Calling patch funtion for inject group id and cards id
      const patched_Data = unique_Id_Patcher(action.payload);
      // Set data to local storage
      localStorage.setItem("cards", JSON.stringify([...state, patched_Data]));
      // Add data to store
      return [...state, patched_Data];
    },
    remove: (state, action) => {
      const remender_groups = state.filter((item) => {
        if (item.groups.group_Id !== action.payload) {
          return item;
        }
      });
      
      localStorage.setItem("cards", JSON.stringify([...remender_groups]));
      // Update data to store
      return remender_groups;
    },
  },
});

export const { add, remove } = cards.actions;

export default cards.reducer;
