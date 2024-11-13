import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/login.css";
import logo from "./../Cal-Poly-Logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("/homepage")
    }
    else {
      setError("Please enter the correct information.");
      // Reset the input fields if you want to clear them
      setUsername("");
      setPassword("");
    }
  }

  const handleUsernameFocus = () => {
    if (username === "") {
      setUsername("example@calpoly.edu");
    }
  };

  const handlePasswordFocus = () => {
    if (password === "") {
      setPassword("fillerpassword");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src={logo} alt="Poly Parking Logo" className="logo" />
          Welcome To Poly Parking
        </div>
        <div className="login-title">Login to your Cal Poly Account</div>
        {error && <div className="error-message" style={{ color: "red", textAlign: "center" }}>{error}</div>}
        <div className="login-form">
          <div className="input">
            <div className="label-container">
              <label>Username:</label>
            </div>
            <div className="input-container">
              <input
                type="text"
                value={username}
                onFocus={handleUsernameFocus}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username@calpoly.edu"
              />
            </div>
          </div>
          <div className="input">
            <div className="label-container">
              <label>Password:&nbsp;</label>
            </div>
            <div className="input-container">
              <input
                type="password"
                value={password}
                onFocus={handlePasswordFocus}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-button">
            <button type="submit" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
