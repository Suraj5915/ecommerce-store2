import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Header from './components/Header/Header'; // Import the Header
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header /> {/* Include the Header */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
