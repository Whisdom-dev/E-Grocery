import React from 'react';

const Hero = ({ image, title, subtitle }) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
