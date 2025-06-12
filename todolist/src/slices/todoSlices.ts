import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem, TODO_STATUS } from "../types";
import { v4 } from "uuid";
const loadTodos = (): ITodoItem[] => {
  const saved = localStorage.getItem("todoList");
  return saved ? JSON.parse(saved) : [];
};
const initialState = {
  todoList: loadTodos(),
};
const todoListSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      console.log("add", action.payload);
      state.todoList.push({
        ...action.payload,
        completed: TODO_STATUS.WAITING_FOR_PROSESSING,
        id: v4(),
      });
    },
    editTodo: (state, action: PayloadAction<ITodoItem>) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todoList[index] = { ...state.todoList[index], ...action.payload };
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed =
          todo.completed === TODO_STATUS.COMPLETED
            ? TODO_STATUS.WAITING_FOR_PROSESSING
            : TODO_STATUS.COMPLETED;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});
export const { addTodo, editTodo, toggleTodo, deleteTodo } =
  todoListSlice.actions;
export default todoListSlice.reducer;
