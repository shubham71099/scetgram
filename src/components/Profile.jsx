import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import shubhamlogo from '../assests/shubhamlogo.jpg';
import '../App.css';

function Profile() {
  const [profile, setProfile] = useState({
    username: "shubham71099",
    name: "Shubham Jha",
    email: "shubhamjha.mca23@scet.ac.in",
    profilePicture:shubhamlogo
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({
        ...profile,
        profilePicture: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate('/login');
  };

  return (
    <div className="profile-container" style={{marginTop:"70px"}}>
      <br></br>
      <h2>Profile</h2>
      <br></br>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <label>
            Profile Picture:
            <input
              type="file"
              name="profilePicture"
              onChange={handleProfilePictureChange}
              className="profile-input"
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="profile-input"
            />
          </label>
          <button type="submit" className="profile-submit-button">Save</button>
        </form>
      ) : (
        <div className="profile-info">
          <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <button onClick={() => setIsEditing(true)} className="profile-edit-button">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={handleLogout} className="profile-edit-button">Logout</button>
        </div>
      )}
    </div>
  );
}

export default Profile;