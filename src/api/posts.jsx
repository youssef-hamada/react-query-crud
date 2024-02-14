export async function fetchPosts() {
    const res = await fetch("http://localhost:3001/posts")
    const data = await res.json()
    return data
}

export async function fetchPost(id) {
    const res = await fetch(`http://localhost:3001/posts/${id}`)
    
    const data = await res.json()
    
    
    return data
}

export async function createPost(newPost) {
    const res = await fetch(`http://localhost:3001/posts`,{
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify(newPost)
    })
    
    
    return res.json()
}
export async function updatePost(updatedPost) {
    const res = await fetch(`http://localhost:3001/posts/${updatedPost.id}`,{
        method:"PUT",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify(updatedPost)
    })
    
    
    return res.json()
}