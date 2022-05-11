import { configureStore } from "@reduxjs/toolkit";
//import todoSlice from "./features/todos/todosSlice";
import noteSlice from "./reducers/noteSlice";

export const store = configureStore({
  reducer: {
    notes: noteSlice,
  },
});
