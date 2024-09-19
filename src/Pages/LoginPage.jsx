import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase"; // Ensure auth is correctly imported from your firebase.js
import "../Css/LoginPage.css"
import Navbar from "../components/Navbar";
import ScrollingNavbar from "../components/ScrollingNavbar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before attempting login

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      setError("Failed to log in. Please check your email and password.");
    }
  };

  return (
    <>
      <Navbar/>
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p className="signup-text">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
            </>
  );
};

export default LoginPage;
