import { useContext } from "react";
import { AppContext } from "../App";

export default function Posts() {
  const context = useContext(AppContext);

  return (
    <>
      {context.posts.map((post) => {
        return (
          <div className="card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </>
  );
}
