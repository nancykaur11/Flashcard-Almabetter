import { configureStore } from "@reduxjs/toolkit";
import theme from "./features/theme";
import cards from "./features/cards";

export const store = configureStore({
  reducer: {
    theme,
    cards,
  },
});
