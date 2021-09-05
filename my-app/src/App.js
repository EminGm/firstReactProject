import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Clothing from "./components/content/clothing/clothing.jsx";
import style from "./components/content/content.module.css";
import Profile from "./components/content/profile/profile.jsx";
import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import "./style.css";
import Music from "./components/content/music/music.jsx";
import News from "./components/content/news/news.jsx";
import Settings from "./components/content/settings/settings.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className={style.content}>
          <Route path="/profile" component={Profile} />
          <Route path="/clothing" component={Clothing} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}
