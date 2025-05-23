import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../App';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsOpen(false);
    navigate('/login');
  };

  const mobileLinks = (
    <>
      <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:underline">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/checkout" onClick={() => setIsOpen(false)} className="block py-2 hover:underline">Checkout</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)} className="block py-2 hover:underline">Cart: {cart.length}</Link>
          <Link to="/orders" onClick={() => setIsOpen(false)} className="block py-2 hover:underline">Order History</Link>
          <button
            onClick={handleLogout}
            className="w-full text-left bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 hover:underline">Login</Link>
      )}
    </>
  );

  return (
    <nav className="bg-blue-600 text-white shadow-md relative">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">E-Grocery</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-14 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/checkout" className="hover:underline">Checkout</Link>
              <Link to="/cart" className="hover:underline">Cart: {cart.length}</Link>
              <Link to="/orders" className="hover:underline">Order History</Link>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:underline">Login</Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-blue-700 text-white p-6 shadow-lg z-50"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            {mobileLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
