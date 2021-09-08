import React from "react";
import style from "./posts.module.css";

const Posts = (props) => {
  return (
    <div className={style.content__my_posts}>
      <div className="content__post">{props.message}</div>
    </div>
  );
}

export default Posts;