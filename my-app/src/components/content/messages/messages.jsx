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

const Messages = () => {
  return (
    <section className={style.messages}>
      <div className={style.dialogs}>
        <Dialogs id="/dialogs/Name1" name="Name1" />
        <Dialogs id="/dialogs/Name2" name="Name2" />
        <Dialogs id="/dialogs/Name3" name="Name3" />
        <Dialogs id="/dialogs/Name4" name="Name4" />
        <Dialogs id="/dialogs/Name5" name="Name5" />
      </div>
      <div className={style.chats}>
        <Chat message="Hi there" />
        <Chat message="How r U" />
        <Chat message="Go go go" />
        <Chat message="Nice day" />
      </div>
    </section>);
}

export default Messages;