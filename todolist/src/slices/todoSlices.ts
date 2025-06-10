import { createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../types";
import { v4 } from "uuid";

const initialState = {
  todoList: [] as ITodoItem[],
};
const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({ ...action.payload, completed: false, id: v4() });
    },
    editTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.name = action.payload.name;
        todo.desc = action.payload.desc;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});
export const { addTodo, editTodo, toggleTodo, deleteTodo } =
  todoListSlice.actions;
export default todoListSlice.reducer;
