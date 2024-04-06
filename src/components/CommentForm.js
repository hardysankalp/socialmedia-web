import React, { useState } from 'react';
import './Post.css'; // Import CSS file


function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    // Update likes on the server or locally
    setLikes(likes + 1);
  };

  return (
    <button onClick={handleLike}>
      Like ({likes})
    </button>
  );
}

export default LikeButton;
