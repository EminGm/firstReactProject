import React from "react";
import style from "./header.module.css";


const Header =()=>{
  return(
<section className = {style.header}>
        <div className = "header__logo">
          <a href="#"><img src="https://thumbs.dreamstime.com/z/greek-goddess-antique-decorative-frame-portrait-circle-frame-vector-logo-design-template-antique-coin-greek-goddess-160741805.jpg" alt=""></img></a>
        </div>
        <div className="header__profile"></div>
      </section>);
}

export default Header;