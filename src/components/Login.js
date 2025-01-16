import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Good from '../images/Good.jpeg';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example hardcoded authentication
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true); // Mark user as authenticated
      navigate('/'); // Redirect to homepage
    } else {
      alert('Invalid credentials'); // Handle incorrect login
    }
  };

  return (
    <div className="flex  bg-cover items-center justify-center h-screen w-full"
    style={{ backgroundImage: `url(${Good})` }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-gray-600 opacity-95 p-10 rounded-lg shadow-2xl w-3/4 max-w-md md:max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Welcome Back
        </h2>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-1000 text-lg">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2 font-medium text-gray-1000 text-lg">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className='mb-6'>
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <div className="flex justify-between items-center mb-6 mt-4">
        <div>
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-black">
            Remember Me
          </label>
        </div>
        <a href="/forgot-password" className="text-blue-400 hover:underline text-sm">
          Forgot Password?
        </a>
      </div>

      
      <div className="mt-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full mb-2">
          Login with Google
        </button>
       
      </div>
      </div>
      </form>
    </div>
  );
};

export default Login;
