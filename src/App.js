import logo from './logo.svg';
import './App.css';import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navigations/navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProrductDetails/productsDetails';
import CartCard from './customer/components/Card/card';
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
     
    <Navigation/>
     
    <div>
      {/* <HomePage /> */}
      {/* <ProductDetails /> */}
      
    </div>
    {/* <CartCard /> */}

    <Checkout/>
    </div>
   
  );
}

export default App;   
