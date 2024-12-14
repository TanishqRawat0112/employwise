import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect( () => {
    console.log("Use effect running on login : ");
    if(isAuthenticated) {
        navigate("/users");
      }
  }, []);
  
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true); // Update the authentication state
      navigate("/users"); // Redirect to users list
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn-primary-login" type="submit">
          Login
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
