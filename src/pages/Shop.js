import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsList from '../data.js';

function Shop({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Store selected size for each product
  const [selectedSizes, setSelectedSizes] = useState({});

  const filteredProducts = selectedCategory === 'all'
    ? productsList
    : productsList.filter(item => item.category === selectedCategory);

  // Update size when selected from the dropdown
  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  // Helper function to get default sizes based on product category
  const getAvailableSizes = (product) => {
    if (product.sizes && product.sizes.length > 0) return product.sizes;
    
    // // Shoes sizes (numbers)
    if (product.category === 'shoes') {
      return ['40', '41', '42', '43', '44'];
    }
    // Clothing sizes (letters)
    if (['jackets', 't-shirts', 'shorts', 'pants'].includes(product.category)) {
      return ['S', 'M', 'L', 'XL', 'XXL'];
    }
    // Accessories and other items (One Size)
    return ['One Size'];
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Our Sports Collection</h2>
        <p className="text-muted">Explore high-quality sportswear, accessories, and gym gear</p>
      </div>

     {/* Category filter buttons for the 6 main categories */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        <button 
          className={`btn ${selectedCategory === 'all' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Items
        </button>
        <button 
          className={`btn ${selectedCategory === 'shoes' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory('shoes')}
        >
          Shoes
        </button>
        <button 
          className={`btn ${selectedCategory === 'jackets' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory('jackets')}
        >
          Jackets
        </button>
        <button 
          className={`btn ${selectedCategory === 't-shirts' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory('t-shirts')}
        >
          T-Shirts
        </button>
        <button 
          className={`btn ${selectedCategory === 'shorts' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory('shorts')}
        >
          Shorts
        </button>
        <button 
          className={`btn ${selectedCategory === 'pants' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory('pants')}
        >
          Pants
        </button>
        <button 
          className={`btn ${selectedCategory === 'accessories' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory('accessories')}
        >
          Gym Accessories
        </button>
      </div>

      {/* Products Grid with Zoom Effect */}
      <div className="row g-4">
        {filteredProducts.map((product) => {
          const availableSizes = getAvailableSizes(product);
          const currentSelectedSize = selectedSizes[product.id] || availableSizes[0];

          return (
            <div className="col-md-4" key={product.id}>
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="card-img-top img-hover-zoom" 
                    style={{ height: '240px', objectFit: 'cover' }} 
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-secondary w-auto align-self-start mb-2 text-uppercase">
                    {product.category}
                  </span>
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted flex-grow-1">
                    {product.description}
                  </p>

                  {/* (Select Size) */}
                  <div className="mt-2 mb-3">
                    <label className="form-label text-muted small fw-bold mb-1" style={{ fontSize: '0.8rem' }}>
                      Select Size:
                    </label>
                    <select
                      className="form-select form-select-sm"
                      value={currentSelectedSize}
                      onChange={(e) => handleSizeChange(product.id, e.target.value)}
                    >
                      {availableSizes.map((sz, idx) => (
                        <option key={idx} value={sz}>{sz}</option>
                      ))}
                    </select>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
                    <span className="fs-5 fw-bold text-success">${product.price}</span>
                    <div className="d-flex gap-2">
                      <Link to={`/product/${product.id}`} className="btn btn-warning text-dark fw-bold btn-sm px-3">
                        Details
                      </Link>
                      {addToCart && (
                        <button 
                          className="btn btn-primary btn-sm px-3 fw-bold"
                          onClick={() => addToCart({ ...product, selectedSize: currentSelectedSize })}
                        >
                          + Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Shop;