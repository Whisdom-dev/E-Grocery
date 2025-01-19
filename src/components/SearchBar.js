import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Fresh Apples', price: 1.2 },
  { id: 2, name: 'Fresh Veggies', price: 0.8 },
  { id: 3, name: 'Fresh Meat', price: 12.0 },
  { id: 4, name: 'Fresh Bread', price: 0.8 },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search products..."
        className="border p-2 w-full rounded-md"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <h3 className="font-bold">{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
