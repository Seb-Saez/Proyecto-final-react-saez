import Card from '../Card/Card';
import './itemlist.css';
import useProducts from '../customHooks/useProducts';
import { useParams } from 'react-router-dom';

function ItemList() {
  const products = useProducts();
  const { categoria } = useParams();
  //console.log(products)                   //Aca muestro lo que capturo en products o categoria, comentar despues

  const productosFiltrados = categoria ? products.filter(producto => producto.category === categoria) : products;

  return (
    <div className="item-list">
      <h1 className='lista-productos'>Lista de Productos</h1>

      <div className="card-container">
        {productosFiltrados.map(producto => (
          <Card key={producto.id} product={producto} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
