import React, { useState } from 'react';
import './LoginForm.css';
import Parse from 'parse';
import { useHistory, useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Initialize error state

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setError(null); // Reset the error state before attempting login

    Parse.User.logIn(email, password)
      .then((user) => {
        console.log(`Logged in as ${user.get('username')}`);
        navigate('/home/'); // Navigate to the profile page
      })
      .catch((error) => {
        console.error(`Login error: ${error.code} - ${error.message}`);
        setError('Invalid email/password'); // Set the error message
        // Handle login error, e.g., display an error message
      });
  };

  return (
    <div className="login-form">
      <input type="text" placeholder="E-Mail" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <div className="login-button">
        <button onClick={handleLogin}>LOGIN</button>
      </div>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
    </div>
  );
}

export default LoginForm;