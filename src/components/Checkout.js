import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const Checkout = ({ cart }) => {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [email, setEmail] = useState(''); // needed for Paystack

  const total = cart.reduce((acc, product) => acc + product.price, 0);
  const grandTotal = total + Number(deliveryFee);

  const handlePayment = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_7067a36d01f63ac225645aed3bc19a9fdc37d4de', 
      amount: grandTotal * 100, 
      email,
      onSuccess: (transaction) => {
        alert(`Payment Complete! Reference: ${transaction.reference}`);
        // Optionally send order info to backend or email here
      },
      onCancel: () => {
        alert('Transaction was cancelled.');
      },
    });
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <p className="mt-4 text-lg">
        Total: <span className="font-bold">₦{total.toFixed(2)}</span>
      </p>
      <button
        disabled={cart.length === 0}
        onClick={() => setShowModal(true)}
        className={`mt-4 w-full py-2 rounded-lg text-white ${
          cart.length === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
        } transition-colors duration-300`}
      >
        Complete Purchase
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded mb-2"
            />

            <input
              type="text"
              placeholder="Enter delivery address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border p-2 rounded mb-2"
            />

            <input
              type="number"
              placeholder="Delivery fee"
              value={deliveryFee}
              onChange={(e) => setDeliveryFee(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />

            <p className="mb-4 font-bold">
              Grand Total: ₦{grandTotal.toFixed(2)}
            </p>

            <button
              onClick={handlePayment}
              className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600"
            >
              Pay Now
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-gray-600 mt-4 block w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
