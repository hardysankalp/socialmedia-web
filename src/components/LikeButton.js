// LikeButton.js
import React, { useState } from 'react';
import axios from 'axios';
import './LikeButton.css'; 

const LikeButton = ({ postId }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      if (!liked) {
        await axios.post(`/api/posts/${postId}/like`);
        console.log('Post liked successfully');
        // Update UI to reflect like
      } else {
        // Handle unlike functionality if needed
      }
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
  );
};

export default LikeButton;
