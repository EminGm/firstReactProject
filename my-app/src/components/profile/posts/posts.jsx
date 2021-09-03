import React from "react";
import style from "./posts.module.css";

const Posts = (props) => {
  return (
    <div className={style.content__my_posts}>My posts
      <div className="content__post1">{props.message}</div>
      <div className="content__post2">{props.message}</div>
      <div className="content__post3">{props.message}</div>
    </div>
  );
}

export default Posts;