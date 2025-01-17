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
    <div
      className="flex bg-cover bg-gray-300 items-center justify-center h-screen w-full" 
    >
      <form
        onSubmit={handleLogin}
        className="bg-gray-600 opacity-95 p-8 sm:p-6 md:p-10 rounded-lg shadow-2xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-black">
          Welcome Back
        </h2>
        <div className="mb-4 sm:mb-6">
          <label className="block mb-2 font-medium text-gray-1000 text-sm sm:text-lg">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label className="block mb-2 font-medium text-gray-1000 text-sm sm:text-lg">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4 sm:mb-6">
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 sm:py-3 rounded-lg text-sm sm:text-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </div>
        <div className="flex justify-between items-center mb-4 sm:mb-6 mt-2 sm:mt-4">
          <div>
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-xs sm:text-sm text-black">
              Remember Me
            </label>
          </div>
          <a
            href="/forgot-password"
            className="text-blue-400 hover:underline text-xs sm:text-sm"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-2 sm:mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded text-sm sm:text-lg hover:bg-gray-800 transition w-full mb-2">
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
