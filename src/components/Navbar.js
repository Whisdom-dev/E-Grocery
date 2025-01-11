import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-blue-500 p-4 shadow-md text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Grocery</h1>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/checkout" className="mr-4 hover:underline">Checkout</Link>
          <Link to="#" className="mr-4 hover:underline">Contact</Link>
          <Link to="/cart" className="hover:underline">
            Cart: {cart.length > 0 ? `${cart.length} items` : "Empty"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
