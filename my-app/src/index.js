import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./components/state/state";
import { addMessage } from "./components/state/state";

ReactDOM.render(
  <App state={state} addMessage={addMessage} />,
  document.getElementById("root")
);
