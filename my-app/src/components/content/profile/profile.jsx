import React from "react";
import style from "./profile.module.css";
import Posts from "./posts/posts.jsx"
import Profileinfo from "./profileinfo/profileinfo";

let postsData = [
  { id: "1", message: "Hi there", likesCount: 1 },
  { id: "2", message: "How r U", likesCount: 4 },
  { id: "3", message: "Go go go", likesCount: 41 }
];

let postsArray = postsData.map((p) => {
  return <Posts message={p.message} likesCount={p.likesCount} />
})

const Profile = () => {
  return (
    <section className={style.content}>
      <Profileinfo />
      <div className="myPosts">My Posts</div>
      {postsArray}
    </section>);
}

export default Profile;