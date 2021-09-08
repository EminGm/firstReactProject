import React from "react";
import style from "./profile.module.css";
import Posts from "./posts/posts.jsx"
import Profileinfo from "./profileinfo/profileinfo";

let postsData = [
  { id: "1", message: "Hi there", likesCount: 1 },
  { id: "2", message: "How r U", likesCount: 4 },
  { id: "3", message: "Go go go", likesCount: 41 }
];

const Profile = () => {
  return (
    <section className={style.content}>
      <Profileinfo />
      <div className="myPosts">My Posts</div>
      <Posts message={postsData[0].message} />
      <Posts message={postsData[1].message} />
      <Posts message={postsData[2].message} />
    </section>);
}

export default Profile;