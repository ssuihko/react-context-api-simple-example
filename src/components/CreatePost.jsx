import { useState, useContext } from "react";
import { AppContext } from "../App";

const INITIAL_POST = {
  title: "",
  content: "",
};

function getInitPost() {
  console.log("here!!!!");
  const formVal = localStorage.getItem("createPostForm");

  if (formVal != null) {
    console.log("here?", formVal);
    return JSON.parse(formVal);
  }

  console.log("here!");
  return { ...INITIAL_POST };
}

export default function CreatePost() {
  const [post, setPost] = useState(getInitPost());
  const context = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedPost = {
      ...post,
      [name]: value,
    };

    setPost(updatedPost);
    localStorage.setItem("createPostForm", JSON.stringify(updatedPost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.setPosts([...context.posts, post]);
    setPost(INITIAL_POST);

    localStorage.removeItem("createPostForm");
    // localStorage.clear();
    localStorage.setItem("createPostForm", JSON.stringify(INITIAL_POST));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={post.title}
        ></input>
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          cols={50}
          rows={5}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Post!"></input>
    </form>
  );
}
