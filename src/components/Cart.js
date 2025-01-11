import React, { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container bg-gray-200 mx-auto p-6">
      {/* Cart Section */}
      <div className="bg-white p-4 rounded shadow-md w-full lg:w-2/3 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <div className="text-gray-500 text-center">
            <p>Your cart is empty</p>
            <Link to="/products" className="text-blue-500 hover:underline">
              Browse products
            </Link>
          </div>
        ) : (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-3 border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="text-lg">{item.name}</span>
                </div>
                <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="mt-4 text-lg font-bold">
            Total: <span>${total.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Checkout Section */}
      {cart.length > 0 && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md w-full lg:w-1/3 mx-auto">
          <h2 className="text-2xl font-semibold">Checkout</h2>
          <p className="mt-4 text-lg">
            Total: <span className="font-bold">${total.toFixed(2)}</span>
          </p>
          <button
            disabled={cart.length === 0}
            className={`mt-4 w-full py-2 rounded-lg text-white ${
              cart.length === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            } transition-colors duration-300`}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
