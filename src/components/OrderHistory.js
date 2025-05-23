import React from 'react';

const OrderHistory = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <p>No past orders found.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.reference}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <p className="text-sm text-gray-500">📅 {order.date}</p>
            <p className="text-md font-medium">💵 Total: ₦{order.grandTotal}</p>
            <p className="text-sm text-gray-600">🧾 Ref: {order.reference}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
