import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todoSlices";

export const store = configureStore({
  reducer: {
    todo: todoListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
