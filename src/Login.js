import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace this with actual authentication logic
    if (credentials.username === 'user' && credentials.password === 'password') {
      login();
      navigate('/checkout'); // Redirect after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
