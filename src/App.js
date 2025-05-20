import logo from './logo.svg';
import './App.css';import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navigations/navigation';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="App">
     
    <Navigation/>
     
    <div>
      <HomePage />
    </div>
    </div>
   
  );
}

export default App;
