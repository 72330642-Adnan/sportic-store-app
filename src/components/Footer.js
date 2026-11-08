import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row g-4 text-center text-md-start align-items-start">
          
          {/*name website & description*/}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-warning mb-2">Sportic Store</h5>
            <p className="text-white-50 small mb-0" style={{ maxWidth: '280px' }}>
              Your ultimate destination for high-quality athletic gear, sportswear, and training essentials.
            </p>
          </div>

          {/* 2. quik link*/}
          <div className="col-12 col-md-4 text-center">
            <h6 className="fw-bold text-light mb-3">Quick Links</h6>
            <div className="d-flex flex-column gap-2 align-items-center">
              <Link to="/" className="text-white-50 text-decoration-none small">Home</Link>
              <Link to="/shop" className="text-white-50 text-decoration-none small">Shop</Link>
              <Link to="/about" className="text-white-50 text-decoration-none small">About Us</Link>
              <Link to="/contact" className="text-white-50 text-decoration-none small">Contact Us</Link>
            </div>
          </div>

          {/* 3. contact us &location*/}
          <div className="col-12 col-md-4 text-center text-md-end">
            <h6 className="fw-bold text-light mb-3">Contact Us</h6>
            <small className="text-white-50 d-block mb-2">
              📍 Location: Main Sport Street, Building #4
            </small>
            <small className="text-white-50 d-block mb-2">
              📞 Phone: +961 700000000
            </small>
            <small className="text-white-50 d-block">
              ✉️ Email: support@sportic.com
            </small>
          </div>

        </div>

        {/* line*/}
        <hr className="my-3 border-secondary opacity-50" />

        
        <div className="text-center">
          <small className="text-white-50">
            &copy; 2026 Sportic Store. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;