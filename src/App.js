import React, { useState } from 'react';
import './App.css';
import Avatar from 'react-avatar';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const addPost = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newPost = { id: Date.now(), title, content, image, likes: 0, comments: [] };
      setPosts([...posts, newPost]);
      setTitle('');
      setContent('');
      setImage(null);
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    }));
  };

  return (
    <div className="App">
      <h1>My Social Media Page</h1>
      <div className="post-form">
        <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Enter Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleUpload} />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            {post.image && <img src={post.image} alt="Post" />}
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="actions">
              <button onClick={() => handleLike(post.id)}>Like {post.likes}</button>
              <input type="text" placeholder="Add a comment" onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id, e.target.value)} />
              <div className="comments">
                {post.comments.map((comment, index) => (
                  <p key={index}><Avatar name="User" size="20" round /> {comment}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
