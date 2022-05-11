import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { NoteApp } from "./src/NoteApp";

export default function App() {
  return (
    <Provider store={store}>
      <NoteApp />
    </Provider>
  );
}
