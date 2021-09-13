import React from "react";
import style from "./../messages.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
  return (<div className={style.dialog}><NavLink to={props.id}>{props.name}</NavLink></div>)
}

export default Dialogs;