import React from "react";
import style from "./messages.module.css";
import { NavLink } from "react-router-dom";

const Messages = () => {
  return (
    <section className={style.messages}>
      <div className={style.dialogs}>
        <div className={style.dialog}><NavLink to="/dialogs/Name1">Name1</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/Name2">Name2</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/Name3">Name3</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/Name4">Name4</NavLink></div>
        <div className={style.dialog}><NavLink to="/dialogs/Name5">Name5</NavLink></div>
      </div>
      <div className={style.chats}>
        <div className={style.chat}>Hi there</div>
        <div className={style.chat}> Hello</div>
        <div className={style.chat}> How r U</div>
      </div>
    </section>);
}

export default Messages;