import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../data'; // data.js

function Home({ addToCart }) {
  const navigate = useNavigate();


  const shoeItem = products.find(p => p.category.toUpperCase() === 'SHOES');
  const topItem = products.find(p => p.category.toUpperCase() === 'JACKETS' || p.category.toUpperCase() === 'T-SHIRTS');
  const bottomItem = products.find(p => p.category.toUpperCase() === 'PANTS' || p.category.toUpperCase() === 'SHORTS');


  const saleProducts = [shoeItem, topItem, bottomItem].filter(Boolean);


  const categories = [
    { id: 1, name: 'Shoes', icon: '👟', itemsCount: '13 Items' },
    { id: 2, name: 'Jackets', icon: '🧥', itemsCount: '9 Items' },
    { id: 3, name: 'T-Shirts', icon: '👕', itemsCount: '13 Items' },
    { id: 4, name: 'Shorts', icon: '🩳', itemsCount: '7 Items' },
    { id: 5, name: 'Pants', icon: '👖', itemsCount: '9 Items' },
    { id: 6, name: 'Gym Accessories', icon: '🎒', itemsCount: '21 Items' }
  ];

  return (
    <div className="home-page pb-5">
      
      {/* 1. HERO BANNER */}
      <div 
        className="text-white py-5 mb-5 shadow"
        style={{
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5)), url('/images/hero-banner.jpeg') center/cover no-repeat",
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container py-3 py-md-4">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7 text-center text-md-start">
              <span className="badge bg-warning text-dark mb-3 px-3 py-2 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                OFFICIAL STORE 2026
              </span>
              
              <h1 className="display-5 display-md-4 fw-bold mb-3" style={{ lineHeight: '1.2' }}>
                Upgrade Your Performance.<br />
                <span className="text-warning">Elevate Your style.</span>
              </h1>
              
              <p className="lead text-white-50 mb-4 fs-6 fs-md-5" style={{ maxWidth: '540px' }}>
                Discover premium sportswear designed for comfort, performance, and everyday training.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                <Link to="/shop" className="btn btn-warning btn-lg fw-bold px-4">
                  Shop Now
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg px-4">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        
        {/* 2. POPULAR CATEGORIES */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold mb-0 fs-4 fs-md-3">Popular Categories</h3>
          <Link to="/shop" className="text-warning text-decoration-none fw-bold small">
            View All &rarr;
          </Link>
        </div>

        <div className="row g-3 mb-5">
          {categories.map((cat) => (
            <div key={cat.id} className="col-6 col-sm-4 col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-light py-3">
                <div className="card-body p-2 p-md-3">
                  <div className="fs-1 mb-2">{cat.icon}</div>
                  <h6 className="fw-bold text-dark mb-1 fs-6">{cat.name}</h6>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>{cat.itemsCount}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. HOT DEALS & SPECIAL OFFERS */}
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h3 className="fw-bold mb-1 fs-4 fs-md-3">
                Special Offers & Sales <span className="badge bg-danger ms-2 fs-6">SALE 🔥</span>
              </h3>
              <p className="text-muted small mb-0">Limited time discounts on top selected athletic items</p>
            </div>
          </div>

          <div className="row g-4">
            {saleProducts.map((product) => {
            
              const oldPrice = (product.price * 1.25).toFixed(0);

              return (
                <div key={product.id} className="col-12 col-sm-6 col-md-4">
                  <div className="card h-100 border-0 shadow-sm position-relative">
                    {/*Discount tage*/}
                    <span 
                      className="position-absolute top-0 end-0 bg-danger text-white fw-bold px-3 py-1 small shadow-sm"
                      style={{ borderBottomLeftRadius: '8px', borderTopRightRadius: '4px', zIndex: 1 }}
                    >
                      20% OFF
                    </span>

                    <img 
                      src={product.image} 
                      className="card-img-top" 
                      alt={product.name}
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                    
                    <div className="card-body d-flex flex-column">
                      <span className="badge bg-secondary mb-2 align-self-start" style={{ fontSize: '0.7rem' }}>
                        {product.category}
                      </span>
                      <h5 className="card-title fw-bold mb-1 fs-6 fs-md-5">{product.name}</h5>
                      <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                      
                      <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                        {/*  old price &new price*/}
                        <div>
                          <span className="text-muted text-decoration-line-through small me-2">${oldPrice}</span>
                          <span className="fs-5 fw-bold text-danger">${product.price}</span>
                        </div>

                        <div className="d-flex gap-2">
                          <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-secondary">
                            Details
                          </Link>
                          <button 
                            type="button"
                            className="btn btn-sm btn-warning fw-bold"
                            onClick={() => {
                              if (addToCart) {
                                const defaultSize = product.sizes && product.sizes.length > 0 
                                  ? product.sizes[0] 
                                  : (product.category === 'SHOES' ? '40' : 'M');
                                addToCart({ ...product, selectedSize: defaultSize });
                              }
                              navigate('/cart');
                            }}
                          >
                            + Cart
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. FEATURES BADGES */}
        <div className="row g-4 text-center py-4 bg-dark text-white rounded-3 shadow-sm mx-0">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 px-3">
              <span className="fs-2 text-warning">🚀</span>
              <div className="text-start">
                <h6 className="fw-bold mb-0">Fast Delivery</h6>
                <small className="text-white-50">Orders delivered in 2-4 days</small>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 px-3">
              <span className="fs-2 text-warning">⭐</span>
              <div className="text-start">
                <h6 className="fw-bold mb-0">High Quality</h6>
                <small className="text-white-50">Tested for top performance</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 px-3">
              <span className="fs-2 text-warning">🎧</span>
              <div className="text-start">
                <h6 className="fw-bold mb-0">24/7 Support</h6>
                <small className="text-white-50">Always ready to assist you</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;