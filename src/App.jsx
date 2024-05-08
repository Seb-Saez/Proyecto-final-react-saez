import './App.css'
import Brand from './components/Brand/Brand';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
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
      <Route path='/' element={<ItemListContainer />} /> 
      <Route path='/item/:id' element={<ItemDetailContainer  />} />
     </Routes>
     <Footer />
    </BrowserRouter>

  );
}

export default App
