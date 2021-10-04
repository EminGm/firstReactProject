import React from "react";
import style from "./profile.module.css";
import Posts from "./posts/posts.jsx";
import Profileinfo from "./profileinfo/profileinfo";

const Profile = (props) => {
  let postsArray = props.state.postsData.map((p) => {
    return <Posts message={p.message} likesCount={p.likesCount} />;
  });

  let textElement = React.createRef();

  let postButton = () => {
    let postButtonText = textElement.current.value;
    props.addMessage(postButtonText);
    textElement.current.value = "";
  };

  let updateText = () => {
    let newText = textElement.current.value;
    props.updatePost(newText);
    textElement.current.value = "";
  };

  return (
    <section className={style.content}>
      <Profileinfo />
      <div className="myPosts">My Posts</div>
      <div>
        <div>
          <textarea
            onChange={updateText}
            ref={textElement}
            value={props.state.newText}
          ></textarea>
        </div>
        <div>
          <button onClick={postButton}>Add Post</button>
        </div>
      </div>
      {postsArray}
    </section>
  );
};

export default Profile;
