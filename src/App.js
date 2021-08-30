import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className = "wrapper">
      <section className = "header">
        <div className = "header__logo">
          <a href="#"><img src="https://thumbs.dreamstime.com/z/greek-goddess-antique-decorative-frame-portrait-circle-frame-vector-logo-design-template-antique-coin-greek-goddess-160741805.jpg" alt=""></img></a>
        </div>
        <div className="header__profile"></div>
      </section>
      <section className = "sidebar">
        <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
      </section>
      <section className = "content">
        <div className="content__img">
          <img src="https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg" alt="content_img"></img></div>Start editing to see some magic happen :)</section>
    </div>
  );
}
