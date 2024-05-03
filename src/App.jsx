import './App.css'
import Brand from './components/Brand/Brand';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App() {

  return (
    <>
     <header>
      <Brand  />
      <NavBar />
     </header>
     <div>
      <ItemListContainer />
     </div>
    </>
  );
}

export default App
