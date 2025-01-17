import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../App';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false); // Log out the user
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md text-white">
      <div className="flex justify-between items-center">
        {/* Website Title */}
        <h1 className="text-1xl font-bold">E-Grocery</h1>

        <div className="flex-grow"></div>


        {/* Links */}
        <div className='flex items-center space-x-2'>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/checkout" className="hover:underline">
                Checkout
              </Link>
              <Link to="/cart" className="hover:underline">
                Cart: {cart.length > 0 ? `${cart.length}` : '0'}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-blue-600 px-2 py-1 rounded hover:bg-gray-600"
              >
                Logout
              </button>
            </>
          )}
          {!isAuthenticated && (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
