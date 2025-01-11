import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-4 py-2 border rounded-l-lg"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
