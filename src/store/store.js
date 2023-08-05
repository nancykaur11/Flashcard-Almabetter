import { configureStore } from "@reduxjs/toolkit";
import theme from "./features/theme";

export const store = configureStore({
  reducer: {
    theme,
  },
});
