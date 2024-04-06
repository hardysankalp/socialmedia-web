import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');
  
  useEffect(() => {
    const socket = io('http://localhost:3001'); // Replace with your server URL
    
    // Listen for new likes on this post
    socket.on('like', (data) => {
      if (data.postId === post.id) {
        setLikes(data.likes);
      }
    });
    
    // Listen for new comments on this post
    socket.on('comment', (data) => {
      if (data.postId === post.id) {
        setComments([...comments, data.comment]);
      }
    });

    return () => socket.disconnect();
  }, [post.id, comments]);

  const handleLike = () => {
    // Emit a like event to the server
    // The server will handle updating the likes and emit the updated likes back
  };

  const handleSubmitComment = () => {
    // Emit a comment event to the server
    // The server will handle updating the comments and emit the new comment back
  };

  return (
    <div className="post">
      <img src={post.photoUrl} alt="Post" />
      <p>{post.description}</p>
      <button className="like-btn" onClick={handleLike}>Like ({likes})</button>
      <div className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleSubmitComment}>Submit</button>
      </div>
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
}

export default Post;
