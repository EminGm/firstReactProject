import React from "react";
import style from "./posts.module.css";

const Posts = () => {
  return (
    <div className={style.content__my_posts}>My posts
      <div className="content__post1">Post1</div>
      <div className="content__post2">Post2</div>
      <div className="content__post3">Post3</div>
    </div>
  );
}

export default Posts;