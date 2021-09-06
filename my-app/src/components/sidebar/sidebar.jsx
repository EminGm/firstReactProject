import React from "react";
import { NavLink } from "react-router-dom";
import style from "./sidebar.module.css";


const Sidebar = () => {
  return (
    <section className={style.sidebar}>
      <ul>
        <li><NavLink to="/profile" classNameActive={style.active}>Profile</NavLink></li>
        <li><NavLink to="/clothing" classNameActive={style.active}>Clothing</NavLink></li>
        <li><NavLink to="/news" classNameActive={style.active}>News</NavLink></li>
        <li><NavLink to="/music" classNameActive={style.active}>Music</NavLink></li>
        <li><NavLink to="/settings" classNameActive={style.active}>Settings</NavLink></li>
      </ul>
    </section>);
}

export default Sidebar;