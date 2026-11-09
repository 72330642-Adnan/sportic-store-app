import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  // Shared Cart State across the app
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/cart" 
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} 
        />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/product/:id" 
          element={<ProductDetail addToCart={addToCart} />} 
        />
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;