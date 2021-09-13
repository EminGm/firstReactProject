import React from "react";
import style from "./messages.module.css";
import Dialogs from "./Dialogs/dialogs.jsx";
import Chat from "./Chat/chat";


const Messages = () => {

  let dialogsData = [
    { id: "/dialogs/Name1", name: "Name1" },
    { id: "/dialogs/Name2", name: "Name2" },
    { id: "/dialogs/Name3", name: "Name3" },
    { id: "/dialogs/Name4", name: "Name4" },
    { id: "/dialogs/Name5", name: "Name5" }];

  let chatsData = [
    { id: "1", message: "Hi there" },
    { id: "2", message: "How r U" },
    { id: "3", message: "Go go go" },
    { id: "4", message: "Nice day" },
  ];

  let dialogsArray = dialogsData.map((d) => {
    return <Dialogs id={d.id} name={d.name} />
  });


  let chatsArray = chatsData.map((c) => {
    return <Chat id={c.id} message={c.message} />
  })

  return (
    <section className={style.messages}>
      <div className={style.dialogs}>
        {dialogsArray}
      </div>
      <div className={style.chats}>
        {chatsArray}
      </div>
    </section>);
}

export default Messages;