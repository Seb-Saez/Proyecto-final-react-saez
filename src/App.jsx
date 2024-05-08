import './App.css'
import Brand from './components/Brand/Brand';
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';




function App() {

  return (
    
    <BrowserRouter>
     <header>
      <Brand  />
      <NavBar />
     </header>
     <Routes>
      <Route path='/' element={<ItemList />} /> 
      <Route path='/item/:id' element={<ItemDetailContainer  />} />
      <Route path='/productos/:categoria' element={<ItemList />} /> 
     </Routes>
     <Footer />
    </BrowserRouter>

  );
}

export default App
