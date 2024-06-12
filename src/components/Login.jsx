import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
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
    if (!credentials.username.endsWith('@scet.ac.in')) {
      toast.error("Email must end with @scet.ac.in");
      return;
    }
    console.log("Logged in");
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Login</h2><br></br>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
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
        <button type="submit" className="profile-edit-button">Login</button>
      </form>
      <p className="register-link">
        Not registered? <Link to="/register">Create an account</Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default Login;
