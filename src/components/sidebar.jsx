import React from "react";
import style from "./sidebar.module.css";


const Sidebar =()=>{
  return(
<section className = {style.sidebar}>
        <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
      </section>);
}

export default Sidebar;