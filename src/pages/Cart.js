import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, setCartItems }) {
  // Calculate total price dynamically
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="card p-5 text-center shadow-sm">
          <p className="lead text-muted">Your cart is currently empty.</p>
          <div>
            <Link to="/shop" className="btn btn-warning fw-bold">Go to Shop</Link>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card shadow-sm p-3">
              {cartItems.map((item) => (
                <div key={item.id} className="row align-items-center py-3 border-bottom">
                  <div className="col-3 col-md-2">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" />
                  </div>
                  
                  <div className="col-5 col-md-4">
                    <h5 className="mb-1 fw-bold">{item.name}</h5>
                    <p className="text-muted mb-0">{item.price}$</p>
                  </div>

                  <div className="col-4 col-md-3 text-center">
                    <div className="btn-group btn-group-sm">
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="btn btn-light disabled text-dark fw-bold px-3">
                        {item.quantity}
                      </span>
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 text-end mt-2 mt-md-0">
                    <p className="fw-bold mb-2">{item.price * item.quantity}$</p>
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <h4 className="fw-bold mb-3">Order Summary</h4>
              <hr />
              <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                <span>Total Price:</span>
                <span className="text-success">{calculateTotal()}$</span>
              </div>
              <button 
                className="btn btn-success w-100 py-2"
                onClick={() => alert("Order placed successfully!")}
              >
                Checkout
              </button>
              <Link to="/shop" className="btn btn-outline-secondary w-100 mt-2">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;