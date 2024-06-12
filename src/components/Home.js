import React from "react";
import FeedPost from "./FeedPost";
import scetlogo from '../assests/scetlogo.png'
import shubhamlogo from '../assests/shubhamlogo.jpg';
import sailogo from '../assests/sailogo.jpg';
import khushallogo from '../assests/khushallogo.png';
import dhwanillogo from '../assests/dhwanillogo.jpg';
import mca from '../assests/mca.jpg';
import khushalpost from '../assests/khushalpost.jpg';
import shubhampost from '../assests/shubhampost.jpg';
import dhwanilpost from '../assests/dhwanilpost.jpg';
import saipost from '../assests/saipost.jpg';
import '../App.css';

const feedPosts = [
  {
    id: 1,
    userAvatar: scetlogo,
    userName: "Scet Surat",
    postDate: "June 7, 2024",
    postImage: mca,
    desc:"Admission started for MCA 2024 batch #mca #coding"
  },
  {
    id: 2,
    userAvatar: shubhamlogo,
    userName: "Shubham Jha",
    postDate: "June 5, 2024",
    postImage: shubhampost,
    desc:"Collecting moments, not things #fun #memories"
  },
  {
    id: 3,
    userAvatar: sailogo,
    userName: "Sai Prasad",
    postDate: "June 3, 2024",
    postImage: saipost,
    desc:"Adventure awaits around every corner #fun #travelling"
  },
  {
    id: 4,
    userAvatar: khushallogo,
    userName: "Khushal Solanki",
    postDate: "May 30, 2024",
    postImage: khushalpost,
    desc:"#sunset #evening #mood #dumas"
  },
  {
    id: 5,
    userAvatar: dhwanillogo,
    userName: "Dhwanil",
    postDate: "May 25, 2024",
    postImage: dhwanilpost,
    desc:"#newpost #mood"
  }
];

function Home() {
  
  return (
    <div className="home">
        <br></br><br></br>
        <br></br>
      <div className="feed-posts">
        {feedPosts.map(post => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
