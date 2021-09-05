import React from "react";
import style from "./sidebar.module.css";


const Sidebar = () => {
  return (
    <section className={style.sidebar}>
      <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/clothing">Clothing</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/music">Music</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </section>);
}

export default Sidebar;