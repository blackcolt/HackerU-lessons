import { configureStore } from "@reduxjs/toolkit";
import todosReducer, { add } from "./reducers/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
