import { useState } from "react";

function getInitialPost() {
    const title = localStorage.getItem("title")
    const content = localStorage.getItem("content")

    return {
      title: title || '',
      content: content || '',
    }
}

export default function CreatePost({ posts, setPosts }) {
    const [post, setPost] = useState(getInitialPost())

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
          ...post,
          [name]: value,
        })
        localStorage.setItem(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPosts([...posts, post])
        localStorage.clear()
        setPost(getInitialPost)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" onChange={handleChange} value={post.title}></input>
            </label>
            <br/>
            <label>
              Content:
              <textarea name="content" onChange={handleChange} value={post.content} cols={50} rows={5}></textarea>
            </label>
            <br/>
            <input type="submit" value="Post!"></input>
        </form>
    )
}
