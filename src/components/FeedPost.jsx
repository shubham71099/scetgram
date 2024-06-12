import React from "react";
import { useState } from "react";
import '../App.css';

function FeedPost({ post }) {
    
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) {
          setLikes(likes - 1);
        } else {
          setLikes(likes + 1);
        }
        setLiked(!liked);
      };

  return (
    <div className="feed-post">
      <div className="feed-post-header">
        <img src={post.userAvatar} alt="User Avatar" className="feed-post-avatar" />
        <div className="feed-post-user-info">
          <h2>{post.userName}</h2>
          <p>{post.postDate}</p>
        </div>
      </div>
      <div className="feed-post-content">
        <img src={post.postImage} alt="Post" className="post-image" />
        <p style={{textAlign:"start",marginLeft:"50px"}}>{post.desc}</p>  
      </div>
      <div className="like-button">
        <button onClick={handleLike}>
          <span role="img" aria-label="thumbs-up">👍</span>
        </button>&nbsp;&nbsp;
        <span className="like-count">{likes}</span>
      </div>
    </div>
  );
}

export default FeedPost;
