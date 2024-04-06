import React, { useState } from 'react';

function PostForm() {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send photo and description to server)
    // Reset form state after submission
    setPhoto(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      <textarea placeholder="Enter description..." value={description} onChange={handleDescriptionChange}></textarea>
      <button type="submit">Upload Post</button>
    </form>
  );
}

export default PostForm;
