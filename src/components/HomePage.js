import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import B from '../images/B.avif'; 
import Fruits from '../images/Fruits.jpg'; 
import Vegetables from '../images/Vegetables.jpg'; 
import Clean from '../images/Clean.jpg'; 
import Coffee from '../images/Coffee.jpeg';
import Testimonial from '../images/Testimonial.jpg'; 
import Testimonial2 from '../images/Testimonial2.jpeg';
import NewsletterForm from './NewsLetterForm';
import Apples from '../images/Apples.jpg';
import Carrot from '../images/Carrot.jpg';
import BeefSteak from '../images/BeefSteak.jpeg';
import Bread from '../images/Bread.jpg';



const HomePage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    { question: "What is E-Grocery?", answer: "E-Grocery is your one-stop online store for fresh produce, beverages, and more!" },
    { question: "Do you offer same-day delivery?", answer: "Yes, we offer same-day delivery for orders placed before 2 PM." },
    { question: "What is your return policy?", answer: "You can return any defective product within 7 days of delivery." },
    { question: "How can I contact customer support?", answer: "You can contact us at support@egrocery.com or call 234-807-9039-435." },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
  className="bg-center bg-cover h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center"
  style={{ backgroundImage: `url(${B})` }}
>
  <div className="flex items-center justify-center min-h-screen text-center px-4">
  <div>
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black whitespace-nowrap">
      Welcome to E-Grocery!
    </h1>

    <p className="text-sm sm:text-base md:text-lg font-semibold text-black mb-6">
      Discover the best deals on amazing products. Shop with ease and enjoy seamless online shopping.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        to="/products"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Shop Now
      </Link>
      <Link
        to="/cart"
        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
      >
        View Cart
      </Link>
    </div>
  </div>
</div>


</div>

          {/* Featured Products */}
      <div className="py-8 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Example featured product */}
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src={Apples}
              alt="Apples"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold mb-2">Fresh Apples</h3>
            <p className="text-gray-700 mb-4">$1.20 each</p>
            <Link
              to="/products/1"
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <img
              src={Carrot}
              alt="Carrot"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold mb-2">Fresh Vegies</h3>
            <p className="text-gray-700 mb-4">$0.80 each</p>
            <Link
              to="/products/1"
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <img
              src={BeefSteak}
              alt="BeefSteak"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold mb-2">Fresh Meat</h3>
            <p className="text-gray-700 mb-4">$12.00 each</p>
            <Link
              to="/products/1"
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <img
              src={Bread}
              alt="Carrot"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold mb-2">Fresh Bread</h3>
            <p className="text-gray-700 mb-4">$0.80 each</p>
            <Link
              to="/products/1"
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
          {/* Repeat for more products */}
        </div>
      </div>

       {/* Categories Section */}
       <div className="py-8 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-1 items:center rounded-lg shadow-md sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <img
              src={Fruits}
              alt="Fruits"
              className="w-full h-40 object-cover mx-auto rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold">Fruits</h3>
            <Link
              to="/products?category=Fruits"
              className="text-blue-500 hover:underline"
            >
              See more Fruits
            </Link>
          </div>
          <div className="text-center">
            <img
              src={Vegetables}
              alt="Vegetables"
              className="w-full h-40 object-cover mx-auto rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold">Vegetables</h3>
            <Link
              to="/products?category=Vegetables"
              className="text-blue-500 hover:underline"
            >
              See more Vegetables
            </Link>
          </div>
          <div className="text-center">
            <img
              src={Clean}
              alt="Cleaning"
              className="w-full h-40 object-cover mx-auto rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold">Cleaning</h3>
            <Link
              to="/products?category=Cleaning"
              className="text-blue-500 hover:underline"
            >
              More Cleaning Supplies
            </Link>
          </div>
          <div className="text-center">
            <img
              src={Coffee}
              alt="Cleaning"
              className="w-full h-40 object-cover mx-auto rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold">Beverages</h3>
            <Link
              to="/products?category=Cleaning"
              className="text-blue-500 hover:underline"
            >
              More Beverages 
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-8 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 rounded-4g shadow-md sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={Testimonial}
            alt="Customer"
            className="w-16 h-16 mx-auto rounded-full mb-4"
          />
          <p className="text-lg italic">
            "E-Grocery has changed the way I shop for groceries. The quality is always top-notch, and delivery is so fast!"
          </p>
          <p className="text-gray-700 font-semibold mt-2">- Emilia C  </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={Testimonial2}
            alt="Customer"
            className="w-16 h-16 mx-auto rounded-full mb-4"
          />
          <p className="text-lg italic">
            "E-Grocery has changed the way I shop for groceries. The quality is always top-notch, and delivery is so fast!"
          </p>
          <p className="text-gray-700 font-semibold mt-2">- John Doe</p>
        </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-8 px-4 bg-blue-100">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-6">
            Get the latest deals and updates delivered straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>

       {/* FAQ Section */}
       <div className="py-8 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
              >
                {faq.question}
                <span>{activeFAQ === index ? '-' : '+'}</span>
              </button>
              {activeFAQ === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-Grocery. All rights reserved. Contact Us: 234-807-9039-435 | support@egrocery.com
        </p>
        <p className="mt-2">
          Follow us on{' '}
          <a href="https://facebook.com" className="text-blue-400 hover:underline">
            Facebook
          </a>{' '}
          |{' '}
          <a href="https://instagram.com" className="text-pink-400 hover:underline">
            Instagram
          </a>{' '}
          |{' '}
          <a href="https://twitter.com" className="text-blue-300 hover:underline">
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
