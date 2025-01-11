import React, { useContext, useState } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../App';

import Apples from '../images/Apples.jpg';
import Banana from '../images/Banana.jpg';
import Carrot from '../images/Carrot.jpg';
import Detergent from '../images/Detergent.jpeg';
import ChickenBreast from '../images/ChickenBreast.jpg';
import BeefSteak from '../images/BeefSteak.jpeg';
import Salmon from '../images/Salmon.jpeg';
import Shrimp from '../images/Shrimp.jpeg';
import Milk from '../images/Milk.jpg';
import CheddarCheese from '../images/CheddarCheese.jpeg';
import OrangeJuice from '../images/OrangeJuice.jpg';
import Coffee from '../images/Coffee.jpeg';
import Pasta from '../images/Pasta.jpeg';
import Rice from '../images/Rice.jpg';
import Bread from '../images/Bread.jpg';


const products = [
    // Fruits
    { id: 1, name: 'Apple', price: 1.2, category: 'Fruits', image: Apples },
    { id: 2, name: 'Banana', price: 0.5, category: 'Fruits', image: Banana },
  
    // Vegetables
    { id: 3, name: 'Carrot', price: 0.8, category: 'Vegetables', image: Carrot },
  
    // Cleaning
    { id: 4, name: 'Detergent', price: 5.5, category: 'Cleaning', image: Detergent },
  
    // Meat
    { id: 5, name: 'ChickenBreast', price: 7.5, category: 'Meat', image: ChickenBreast },
    { id: 6, name: 'BeefSteak', price: 12.0, category: 'Meat', image: BeefSteak },
  
    // Seafood
    { id: 7, name: 'Salmon', price: 15.0, category: 'Seafood', image: Salmon },
    { id: 8, name: 'Shrimp', price: 10.0, category: 'Seafood', image: Shrimp },
  
    // Dairy
    { id: 9, name: 'Milk', price: 2.5, category: 'Dairy', image: Milk },
    { id: 10, name: 'CheddarCheese', price: 4.5, category: 'Dairy', image: CheddarCheese },
  
    // Beverages
    { id: 11, name: 'OrangeJuice', price: 3.0, category: 'Beverages', image: OrangeJuice },
    { id: 12, name: 'Coffee', price: 8.0, category: 'Beverages', image: Coffee },
  
    // Other Grocery Items
    { id: 13, name: 'Pasta', price: 1.5, category: 'Grocery', image: Pasta },
    { id: 14, name: 'Rice', price: 2.0, category: 'Grocery', image: Rice },
    { id: 15, name: 'Bread', price: 1.8, category: 'Bakery', image: Bread },
  ];
  


const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="cover bg-gray-300 min-h-screen mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Grocery Store</h1>

      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-4 py-2 w-1/2"
        />
        <select
  className="border rounded-lg px-4 py-2"
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="All">All Categories</option>
  <option value="Fruits">Fruits</option>
  <option value="Vegetables">Vegetables</option>
  <option value="Cleaning">Cleaning</option>
  <option value="Meat">Meat</option>
  <option value="Seafood">Seafood</option>
  <option value="Dairy">Dairy</option>
  <option value="Beverages">Beverages</option>
  <option value="Bakery">Bakery</option>
</select>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
