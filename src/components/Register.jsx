import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    name: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.email.endsWith('@scet.ac.in')) {
      toast.error("Email must end with @scet.ac.in");
      return;
    }
    console.log("Registration success");
    navigate('/');
  };

  return (
    <div className="register-container" style={{ marginTop: "62px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="login-input"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="login-input"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="login-input"
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            className="login-input"
            required
          />
        </label>
        <button type="submit" className="profile-edit-button">Register</button>
      </form>
      <p className="register-link">
        Already registered? <Link to="/login">Login now</Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default Register;
