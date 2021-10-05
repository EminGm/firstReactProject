import { rerenderEntireTree } from "../../render.js";

let state = {
  messagesPage: {
    dialogsdata: [
      { id: "/dialogs/Name1", name: "Name1" },
      { id: "/dialogs/Name2", name: "Name2" },
      { id: "/dialogs/Name3", name: "Name3" },
      { id: "/dialogs/Name4", name: "Name4" },
      { id: "/dialogs/Name5", name: "Name5" },
    ],

    chatsdata: [
      { id: "1", message: "Hi there" },
      { id: "2", message: "How r U" },
      { id: "3", message: "Go go go" },
      { id: "4", message: "Nice day" },
    ],
  },
  profilePage: {
    postsData: [
      { id: "1", message: "Hi there", likesCount: 1 },
      { id: "2", message: "How r U", likesCount: 4 },
      { id: "3", message: "Go go go", likesCount: 41 },
    ],
    newText: "",
  },
};

export let addMessage = () => {
  let newPost = {
    id: "4",
    message: state.profilePage.newText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
  state.profilePage.newText = "";
};

export let updatePost = (newText) => {
  state.profilePage.newText = newText;
  rerenderEntireTree(state);
};

export default state;
