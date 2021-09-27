import React from "react";
import ReactDOM from "react-dom";

import state from "./components/state/state";

import { rerenderEntireTree } from "./render";

rerenderEntireTree(state);
