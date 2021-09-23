import React from "react";
import style from "./messages.module.css";
import Dialogs from "./Dialogs/dialogs.jsx";
import Chat from "./Chat/chat";



const Messages = (props) => {



  let dialogsArray = props.state.dialogsdata.map((d) => {
    return <Dialogs id={d.id} name={d.name} />
  });


  let chatsArray = props.state.chatsdata.map((c) => {
    return <Chat id={c.id} message={c.message} />
  })

  let text = React.createRef();

  let send = () => {
    console.log(text.current.value)
  };

  return (
    <section className={style.messages}>
      <div className={style.dialogs}>
        {dialogsArray}
      </div>
      <div className={style.chats}>
        {chatsArray}
      </div>
      <div>
        <div>
          <textarea ref={text}></textarea>
        </div>
        <div>
          <button onClick={send}>Send</button>
        </div>
      </div>
    </section>);
}

export default Messages;