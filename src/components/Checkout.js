import React from 'react';

const Checkout = ({ cart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
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
  );
};

export default Checkout;
