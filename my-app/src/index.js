import React from "react";
import ReactDOM from "react-dom";
import App from "./App";



let dialogsdata = [
    { id: "/dialogs/Name1", name: "Name1" },
    { id: "/dialogs/Name2", name: "Name2" },
    { id: "/dialogs/Name3", name: "Name3" },
    { id: "/dialogs/Name4", name: "Name4" },
    { id: "/dialogs/Name5", name: "Name5" }];

let chatsdata = [
    { id: "1", message: "Hi there" },
    { id: "2", message: "How r U" },
    { id: "3", message: "Go go go" },
    { id: "4", message: "Nice day" },
]

let postsData = [
    { id: "1", message: "Hi there", likesCount: 1 },
    { id: "2", message: "How r U", likesCount: 4 },
    { id: "3", message: "Go go go", likesCount: 41 }
];

ReactDOM.render(<App dialogsdata={dialogsdata} chatsdata={chatsdata} postsData={postsData} />, document.getElementById("root"));