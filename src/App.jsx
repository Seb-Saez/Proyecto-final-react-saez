import './App.css'
import Brand from './components/Brand';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {

  return (
    <>
     <header>
      <Brand  />
      <NavBar />
     </header>
     <div>
      <ItemListContainer greeting={"Bienvenido a Trefil Piscinas!"} />
     </div>
    </>
  );
}

export default App
