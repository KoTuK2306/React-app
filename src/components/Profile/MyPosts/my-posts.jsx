import React from "react";
import Post from "./../Post/post";
import SendPostFormRedux from "./MyPostForm/myPostForm";

const MyPosts = (props) => {
  const post = props.postData.map((postData) => (
    <Post
      likesCount={postData.likesCount}
      message={postData.message}
      key={postData.message}
    />
  ));

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <>
      <SendPostFormRedux onSubmit={addNewPost} />
      <div>{post}</div>
    </>
  );
};

export default MyPosts;