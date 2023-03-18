import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DFTCustom from './pages/DFTCustom';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Checkout/CartPage';
import Header from './pages/Header/header';
import Footer from './pages/Footer/Footer';
import './App.css';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dtf" element={<DFTCustom />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart/> }/>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
