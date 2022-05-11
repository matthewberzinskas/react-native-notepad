import { createSlice } from "@reduxjs/toolkit";

let nextNoteId = 0;

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote(state, action) {
      state.push({ id: nextNoteId++, text: action.payload, completed: false });
    },
  },
});

export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
