import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

// Create a Context for Cart
export const CartContext = createContext();

const App = () => {
  // Load the cart from local storage or initialize an empty cart
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save the cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
