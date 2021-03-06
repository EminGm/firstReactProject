import React from "react";
import { Route } from "react-router-dom";
import Messages from "./components/content/messages/messages.jsx";
import style from "./components/content/content.module.css";
import Profile from "./components/content/profile/profile.jsx";
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import "./style.css";
import Music from "./components/content/music/music.jsx";
import News from "./components/content/news/news.jsx";
import Settings from "./components/content/settings/settings.jsx";

export default function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className={style.content}>
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              addMessage={props.addMessage}
              updatePost={props.updatePost}
            />
          )}
        />
        <Route
          path="/messages"
          render={() => <Messages state={props.state.messagesPage} />}
        />
        <Route path="/music" render={Music} />
        <Route path="/news" render={News} />
        <Route path="/settings" render={Settings} />
      </div>
    </div>
  );
}
