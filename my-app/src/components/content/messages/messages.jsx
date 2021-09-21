import React from "react";
import style from "./messages.module.css";
import Dialogs from "./Dialogs/dialogs.jsx";
import Chat from "./Chat/chat";



const Messages = (props) => {

  let dialogsArray = props.dialogsdata.map((d) => {
    return <Dialogs id={d.id} name={d.name} />
  });


  let chatsArray = props.chatsdata.map((c) => {
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