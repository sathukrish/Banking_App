import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css'; // Import your CSS file for styling (create a Login.css file)

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Create a navigate function

  const isUsernameValid = (username) => {
    // Ensure the username is not empty
    return username.trim() !== '';
  };

  const isPasswordValid = (password) => {
    // Ensure the password is not empty
    return password.trim() !== '';
  };

  const handleLogin = async () => {
    if (!isUsernameValid(username)) {
      setMessage('Please enter a valid username.');
      return;
    }

    if (!isPasswordValid(password)) {
      setMessage('Please enter a valid password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Save the token to local storage or session storage
        localStorage.setItem('token', data.token);
        setMessage(''); // Clear the error message on successful login
        navigate('/:username'); // Navigate to the specified route on successful response
      } else {
        setMessage(data.message); // Display error message returned from the server
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Error during login.'); // Display generic error message on fetch error
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
      <p className="message">{message}</p>

      <p>If you are new <Link to="/">click here</Link></p>
    </div>
  );
};

export default Login;
