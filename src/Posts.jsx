import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])


    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>
<h4>{post.title}</h4>
<p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;