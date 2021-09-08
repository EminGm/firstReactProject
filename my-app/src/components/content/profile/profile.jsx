import React from "react";
import style from "./profile.module.css";
import Posts from "./posts/posts.jsx"
import Profileinfo from "./profileinfo/profileinfo";

const Profile = () => {
  return (
    <section className={style.content}>
      <Profileinfo />
      <Posts message="Test" />
      <Posts message="Test2" />
      <Posts message="Test3" />
    </section>);
}

export default Profile;