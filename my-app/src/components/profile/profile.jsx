import React from "react";
import style from "./profile.module.css";
import Posts from "./posts/posts.jsx"

const Profile = () => {
  return (
    <section className={style.content}>
      <div className="content__img">
        <img src="https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg" alt="content_img"></img>
      </div>
      <Posts message="Test" />
    </section>);
}

export default Profile;