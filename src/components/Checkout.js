import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import emailjs from 'emailjs-com';

const Checkout = ({ cart }) => {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [userCoords, setUserCoords] = useState(null);

  const warehouseCoords = {
    lat: 6.5244, // Lagos
    lng: 3.3792,
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);
  const grandTotal = total + Number(deliveryFee);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserCoords(coords);
          const fee = calculateDeliveryFee(coords);
          setDeliveryFee(fee);
        },
        () => {
          alert('Failed to get your location. Please allow location access.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const calculateDeliveryFee = (coords) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;

    const dLat = toRad(coords.lat - warehouseCoords.lat);
    const dLng = toRad(coords.lng - warehouseCoords.lng);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(warehouseCoords.lat)) *
        Math.cos(toRad(coords.lat)) *
        Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    if (distance <= 5) return 1000;
    else if (distance <= 20) return 2000;
    else if (distance <= 50) return 3000;
    else return 5000;
  };

  const handlePayment = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_7067a36d01f63ac225645aed3bc19a9fdc37d4de', // Replace with your own
      amount: grandTotal * 100,
      email,
      onSuccess: (transaction) => {
        alert(`Payment Complete! Reference: ${transaction.reference}`);

        const orderDetails = {
          email,
          location,
          deliveryFee,
          grandTotal,
          cart,
          reference: transaction.reference,
          date: new Date().toLocaleString(),
        };

        // Save to localStorage
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        localStorage.setItem('orders', JSON.stringify([...existingOrders, orderDetails]));

        // Send receipt via EmailJS
        emailjs.send(
          'service_t7ya43j',        // <-- Replace with your EmailJS service ID
          'template_bh5n96',       // <-- Replace with your EmailJS template ID
          {
            to_email: email,
            user_email: email,
            order_items: cart.map(item => `${item.name} - ₦${item.price}`).join(', '),
            delivery_fee: deliveryFee,
            grand_total: grandTotal,
            reference: transaction.reference,
          },
          'R4ZeARZh7BNIgCehL'         // <-- Replace with your EmailJS public key
        ).then(() => {
          console.log('Receipt sent!');
        }).catch((err) => {
          console.error('Email sending failed:', err);
        });

        setShowModal(false);
      },
      onCancel: () => {
        alert('Transaction was cancelled.');
      },
    });
  };

  return (
    <div className="container mx-auto mt-8 px-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <p className="mt-4 text-lg">
        Total: <span className="font-bold">₦{total.toFixed(2)}</span>
      </p>
      <button
        disabled={cart.length === 0}
        onClick={() => {
          setShowModal(true);
          getUserLocation();
        }}
        className={`mt-4 w-full py-2 rounded-lg text-white ${
          cart.length === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
        } transition-colors duration-300`}
      >
        Complete Purchase
      </button>

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

            <p className="text-sm text-gray-600 mb-2">
              Estimated delivery fee: ₦{deliveryFee}
            </p>

            <p className="mb-4 font-bold">Grand Total: ₦{grandTotal.toFixed(2)}</p>

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
