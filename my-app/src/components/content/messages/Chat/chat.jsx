import React from "react";
import style from "./../messages.module.css";

const Chat = (props) => {
  return (
    <div className={style.chat}>{props.message}</div>
  )
}


export default Chat;