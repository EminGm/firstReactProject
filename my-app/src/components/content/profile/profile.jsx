import React from "react";
import style from "./profile.module.css";
import Posts from "./posts/posts.jsx"
import Profileinfo from "./profileinfo/profileinfo";


const Profile = (props) => {

  let postsArray = props.state.postsData.map((p) => {
    return <Posts message={p.message} likesCount={p.likesCount} />
  })

  return (
    <section className={style.content}>
      <Profileinfo />
      <div className="myPosts">My Posts</div>
      {postsArray}
    </section>);
}



export default Profile;