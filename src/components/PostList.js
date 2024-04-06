// PostList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={`data:${post.image.contentType};base64,${post.image.data}`} alt="Post" />
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
