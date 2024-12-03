import { useState } from "react";
import React from "react";
import "../Component/loginpage.css"; // For styling
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email == "admin@admin.com" && password == "admin@123") {
      navigate("/home");
    } else {
      toast.error("Wrong Credentials!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={handleEmailChange}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />

          <button type="submit" className="login-button">
            Login
          </button>
          {/* Yet to work */}
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
