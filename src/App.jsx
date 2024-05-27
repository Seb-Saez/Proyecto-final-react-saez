import './App.css'
import Brand from './components/Brand/Brand';
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CartProvider from './components/Context/CartProvider';
import CartContainer from './components/Cart/CartContainer';
import Checkout from './components/CheckOut/Checkout';

function App() {

  return (

    <BrowserRouter>
     <CartProvider>
      <header>
       <Brand  />
       <NavBar />
      </header>
      <Routes>
       <Route path='/' element={<ItemList />} /> 
       <Route path='/item/:id' element={<ItemDetailContainer  />} />
       <Route path='/productos/:categoria' element={<ItemList />} /> 
       <Route path='/cart' element={<CartContainer />} /> 
       <Route path='/checkout' element={<Checkout />} /> 
      </Routes>
      <Footer />
     </CartProvider>
    </BrowserRouter>

    

  );
}

export default App
