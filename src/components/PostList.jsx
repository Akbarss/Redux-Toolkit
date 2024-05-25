// src/components/PostList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../core/redux/features/crud/crudThunk";
// import { fetchPosts, deletePost } from '../store/postsSlice';

const PostList = ({ setCurrentId }) => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          <button onClick={() => setCurrentId(post.id)}>Edit</button>
          <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
