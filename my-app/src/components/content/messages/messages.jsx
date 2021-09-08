import React from "react";
import style from "./messages.module.css";


const Messages = () => {
  return (
    <section className={style.messages}>
      <div className={style.dialogs}>
        <div className={style.dialog}>Name1</div>
        <div className={style.dialog}>Name2</div>
        <div className={style.dialog}>Name3</div>
        <div className={style.dialog}>Name4</div>
        <div className={style.dialog}>Name5</div></div>
      <div className={style.chats}>
        <div className={style.chat}>Hi there</div>
        <div className={style.chat}> Hello</div>
        <div className={style.chat}> How r U</div>
      </div>
    </section>);
}

export default Messages;