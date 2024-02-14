import { debounce } from 'lodash'
import React, { useState } from 'react'

const PostForm = ({onSubmit,initialVal}) => {

    const [post, setPost] = useState({
        title:initialVal.title || "",
        body:initialVal.body || ""
    }) 

    


    const handleChangeInput = debounce((name,value) => {
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    }, 300);


    const handleInputChange = (e) => {
        const {name,value} = e.target;
        handleChangeInput(name,value)
    }


    const renderField = (label) => {
        return (
            <div>
                <label>{label}</label>
                <input onChange={handleInputChange} type="text" name={label.toLowerCase()}  value={post[label.toLowerCase()]} />
                
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(post)
        setPost({
            title:"",
            body:""
        })
    }




  return (
    <form onSubmit={handleSubmit}>
      {renderField("title")}
      {renderField("body")}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default PostForm
