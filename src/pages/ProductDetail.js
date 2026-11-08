import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsList from '../data.js';

function ProductDetail({ addToCart }) {
  const { id } = useParams();

  const product = productsList.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h2>Product Not Found</h2>
        <Link to="/shop" className="btn btn-primary mt-3">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded border p-3 shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <span className="badge bg-secondary mb-2 text-uppercase">{product.category}</span>
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <h3 className="text-success fw-bold mb-4">${product.price}</h3>
          <p className="lead text-muted mb-4">{product.description}</p>
          
          <div className="d-flex gap-3">
            <button 
              className="btn btn-success btn-lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <Link to="/shop" className="btn btn-outline-secondary btn-lg">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;