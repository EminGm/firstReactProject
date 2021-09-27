import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addMessage } from "./components/state/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addMessage={addMessage} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
