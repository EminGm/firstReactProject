import React from "react";
import style from "./messages.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
  return (<div className={style.dialog}><NavLink to={props.id}>{props.name}</NavLink></div>)
}

const Chat = (props) => {
  return (
    <div className={style.chat}>{props.message}</div>
  )
}

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

const Messages = () => {
  return (
    <section className={style.messages}>
      <div className={style.dialogs}>
        <Dialogs id={dialogsData[0].id} name={dialogsData[0].name} />
        <Dialogs id={dialogsData[1].id} name={dialogsData[1].name} />
        <Dialogs id={dialogsData[2].id} name={dialogsData[2].name} />
        <Dialogs id={dialogsData[3].id} name={dialogsData[3].name} />
        <Dialogs id={dialogsData[4].id} name={dialogsData[4].name} />
      </div>
      <div className={style.chats}>
        <Chat id={chatsData[0].id} message={chatsData[0].message} />
        <Chat id={chatsData[1].id} message={chatsData[1].message} />
        <Chat id={chatsData[2].id} message={chatsData[2].message} />
        <Chat id={chatsData[3].id} message={chatsData[3].message} />
      </div>
    </section>);
}

export default Messages;