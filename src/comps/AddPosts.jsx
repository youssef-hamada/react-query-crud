import React from 'react'
import PostForm from './PostForm'
import { useMutation, useQueryClient } from 'react-query'
import { createPost } from '../api/posts'

const AddPosts = () => {
    const queryClient = useQueryClient();



    const createPostMutation = useMutation({
        mutationFn:createPost,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["posts"]})
            console.log('success')
        }
    })

    const handleAddPost = (post) => {
        createPostMutation.mutate({
            id:3,
            ...post
        })
    }

  return (
    <div>
      <h2>add new post</h2>
      <PostForm onSubmit={handleAddPost} initialVal={{}}/>
    </div>
  )
}

export default AddPosts
