import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/page.css";
import "../styles/login.css";
import logo from "../assets/Cal-Poly-Logo.png";
import pic from "../assets/polyparking_new.png";

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
    <main className="page login">
      <div className="login-container">
         <img src={pic} alt="Poly Parking Logo" className="logo" />
         <h1>Welcome To Poly Parking</h1>
         <h2>Login to your Cal Poly Account</h2>
        {error && <div className="error-message" style={{ color: "red", textAlign: "center" }}>{error}</div>}
        <div className="login-form">
          <div className="userpassinput">
            <label>Username:</label>
              <input
                type="text"
                value={username}
                onFocus={handleUsernameFocus}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username@calpoly.edu"
              />
          </div>
          <div className="userpassinput">
            <label>Password:&nbsp;</label>
              <input
                type="password"
                value={password}
                onFocus={handlePasswordFocus}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="submit-button">
            <button type="submit" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
