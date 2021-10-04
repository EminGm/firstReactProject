import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addMessage, updatePost } from "./components/state/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addMessage={addMessage} updatePost={updatePost} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
