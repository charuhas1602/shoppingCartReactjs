import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar1 from './components/Navbar';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import ShopContextProvider from './context/shopContext'
const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router >
      </ShopContextProvider>
    </div>
  )
}

export default App;
