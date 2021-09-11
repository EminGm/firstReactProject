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


  let dialogsData = [
    { id: "/dialogs/Name1", name: "Name1" },
    { id: "/dialogs/Name2", name: "Name2" },
    { id: "/dialogs/Name3", name: "Name3" },
    { id: "/dialogs/Name4", name: "Name4" },
    { id: "/dialogs/Name5", name: "Name5" }];

  /*Элемент dialogsArray не отображается. Не пойму в чем дело*/

  let dialogsArray = dialogsData.map((d) => {
    return
    <Dialogs id={d.id} name={d.name} />
  }
  )


  let chatsData = [
    { id: "1", message: "Hi there" },
    { id: "2", message: "How r U" },
    { id: "3", message: "Go go go" },
    { id: "4", message: "Nice day" },
  ];


  return (
    <section className={style.messages}>
      <div className={style.dialogs}>
        {dialogsArray}
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