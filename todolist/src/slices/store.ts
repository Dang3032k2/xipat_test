import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todoSlices";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
