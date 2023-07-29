/*import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home, About, Products, SingleProduct, Cart, Error, 
  Checkout, PrivateRoute} from './pages'

function App() {
  return 
  
    <Router>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="checkout" 
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute> } />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
          </Router> 
    
  
}

export default App */





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';
function App() {
  return (
    
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' exact element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          {/*<PrivateRoute exact
            path='checkout'
            element={ <Checkout />}
  />*/}

          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
         <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
   
  );
}

export default App;
