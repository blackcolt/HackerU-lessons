import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: uuid(),
        title: action.payload.title,
        isComplete: false,
        createdAt: Date.now(),
      });
    },
    remove: (state, action) => {
      state.todos = state.todos.filter(
        (todos) => todos.id !== action.payload.id
      );
    },
    clear: (state) => {
      state.todos = [];
    },
    changeIsComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isComplete = !todo.isComplete;
        }

        return todo;
      });
    },
  },
});

export const { add, remove, clear, changeIsComplete } = todosSlice.actions;

export default todosSlice.reducer;
