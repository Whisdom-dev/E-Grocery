import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-40 mx-auto object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-lg font-bold text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
