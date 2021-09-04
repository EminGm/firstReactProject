import React from "react";
import "./style.css";
import style from "./components/content/content.module.css"
import Header from "./components/header/header.jsx"
import Sidebar from "./components/sidebar/sidebar.jsx"
import Profile from "./components/content/profile/profile.jsx"
import Clothing from "./components/content/clothing/clothing.jsx"

export default function App() {
  return (

    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className={style.content}>
        <Profile />
        <Clothing />
      </div>
    </div>
  );
}
