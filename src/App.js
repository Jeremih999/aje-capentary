import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import SharedLayout from './component/SharedLayout';
import Home from './pages/Home'
import About from './pages/About';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './component/SingleProduct';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path='/product-details' element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
