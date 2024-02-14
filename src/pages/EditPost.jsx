import React from 'react'
import PostForm from '../comps/PostForm'

import { useNavigate, useParams } from 'react-router-dom';
import {  useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchPost, updatePost } from '../api/posts';

const EditPost = () => {



    const navigate = useNavigate()
    const QueryClient = useQueryClient()

    const {id} = useParams()

    const handlePostMutation = useMutation({
        mutationFn:updatePost,
        onSuccess:() => {
            QueryClient.invalidateQueries({queryKey:['posts']})
            navigate('/')
        }
      })


    

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


      const handleSubmit = (updatedPost) => {
        handlePostMutation.mutate({id,...updatedPost})
      }


      






  return (
    <div>
      <PostForm onSubmit={handleSubmit} initialVal = {post}/>
    </div>
  )
}

export default EditPost
