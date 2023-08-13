import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isUsernameValid = (username) => {
    // Ensure the username does not contain spaces
    return username.trim() === username;
  };

  const isPasswordValid = (password) => {
    // Minimum password length requirement (you can modify the length as needed)
    return password.length >= 6;
  };

  const handleSignUp = async () => {
    if (!isEmailValid(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!isUsernameValid(username)) {
      setMessage('Username should not contain spaces.');
      return;
    }

    if (!isPasswordValid(password)) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    const response = await fetch('http://ec2-13-49-240-240.eu-north-1.compute.amazonaws.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });
    const data = await response.json();
    setMessage(data.message);

    if (response.status === 200) {
      navigate(`/${username}`);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignUp}>Sign Up</button>
      <p className="message">{message}</p>

      <p className="login-link">
        If you have an account <Link to="/login">click here</Link>
      </p>
    </div>
  );
};

export default SignUp;
