import React from "react";
import AddPosts from "../comps/AddPosts";
import { useQuery } from "react-query";
import { fetchPosts } from "../api/posts";
import { useNavigate } from "react-router-dom";

const PostLists = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error:${error.message}`;
  return (
    <div>
      <AddPosts />

      {posts.map((post) => {
        return (
          <div style={{ backgroundColor: "gray" }}>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              {post.title}
            </h1>
            <h3>{post.body}</h3>
            <button onClick={() => navigate(`/post/${post.id}/edit`) }>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostLists;
