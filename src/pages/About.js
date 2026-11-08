import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container my-5">
      {/* 1. Header Section */}
      <div className="text-center mb-5">
        <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
          About Sportic Store
        </span>
        <h1 className="fw-bold display-5">Your Ultimate Sports Destination</h1>
        <p className="text-muted lead col-md-8 mx-auto mt-3">
          We provide high-quality athletic gear, shoes, and workout accessories designed for performance, comfort, and everyday style.
        </p>
      </div>

      {/* 2. Mission & Values Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4 bg-light">
            <h3 className="fw-bold mb-3 text-dark">Our Mission</h3>
            <p className="text-muted mb-0">
              At Sportic Store, our goal is to empower athletes and fitness enthusiasts by offering durable, stylish, and affordable sports equipment. 
              Whether you are training at the gym, running outdoors, or relaxing, we have got you covered.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4 bg-light">
            <h3 className="fw-bold mb-3 text-dark">Why Choose Us</h3>
            <p className="text-muted mb-0">
              We carefully select our products to ensure superior comfort, moisture-wicking fabrics, and modern designs. 
              Every item in our catalog is picked to help you achieve peak physical performance.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Features Grid */}
      <h3 className="text-center fw-bold mb-4">What We Offer</h3>
      <div className="row g-4 text-center mb-5">
        <div className="col-md-4">
          <div className="card h-100 border p-4 shadow-sm">
            <div className="fs-1 mb-2">👟</div>
            <h5 className="fw-bold">Premium Footwear</h5>
            <p className="text-muted small mb-0">
              High-performance running shoes, sneakers, and casual footwear built for stability and speed.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border p-4 shadow-sm">
            <div className="fs-1 mb-2">🏋️‍♂️</div>
            <h5 className="fw-bold">Gym Accessories</h5>
            <p className="text-muted small mb-0">
              From weightlifting gloves to quick-dry towels and water bottles to fuel your workouts.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border p-4 shadow-sm">
            <div className="fs-1 mb-2">🧥</div>
            <h5 className="fw-bold">Quality Apparel</h5>
            <p className="text-muted small mb-0">
              Durable jackets, caps, and socks designed for outdoor endurance and active lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Call to Action Banner */}
      <div className="text-center p-5 rounded bg-dark text-white shadow">
        <h2 className="fw-bold mb-3">Ready to Upgrade Your Athletic Gear?</h2>
        <p className="text-muted mb-4">Discover our latest collection of footwear and accessories today.</p>
        <Link to="/shop" className="btn btn-warning btn-lg fw-bold px-4">
          Explore Shop Now
        </Link>
      </div>
    </div>
  );
}
export default About;