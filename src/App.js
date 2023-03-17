import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductCustomizer from './pages/dtf';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Checkout/CartPage';
import './App.css';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dtf" element={<ProductCustomizer />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart/> }/>
      </Routes>
    </>

  );
}

export default App;
