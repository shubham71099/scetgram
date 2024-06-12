import React from "react";
import { useState } from "react";
import '../App.css';

function Post() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post submitted", { text, image });

    setText("");
    setImage(null);
  };

  return (
    
    <div className="post-container" style={{marginTop:"70px"}}>
     <br></br>
      <h2>New Post</h2>
      <br></br>
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="What's on your mind?"
          className="post-textarea"
        ></textarea>
        <input type="file" onChange={handleImageChange} className="post-file-input" />
        <button type="submit" className="post-submit-button">Post</button>
      </form>
      {image && (
        <div className="post-image-preview">
          <img src={URL.createObjectURL(image)} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default Post;
