export default function Posts({ posts }) {
    return (
        <>
            {posts.map(post => {
                return (
                    <div className="card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </>
    )
}
