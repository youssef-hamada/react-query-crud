import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPost } from '../api/posts';

const Post = () => {
    const navigate = useNavigate()

    const {id} = useParams()

    const {
        isLoading,
        isError,
        data: post,
        error,
      } = useQuery({
        queryKey: ["post",{id}],
        queryFn: () => fetchPost(id),
        
      });
    
      if (isLoading) return "Loading...";
      if (isError) return `Error:${error.message}`;


  return (
    <div>
        <button onClick={() => navigate("/")}>back to posts</button>
      <h1>{post.title}</h1>
      <h4>{post.body}</h4>
      
      {post.body}
    </div>
  )
}

export default Post
