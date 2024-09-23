// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SubmitProduct from './Pages/SubmitProduct';
import ProductListing from './Pages/ProductListing';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-product" element={<SubmitProduct />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
