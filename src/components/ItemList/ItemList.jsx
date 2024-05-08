import Card from '../Card/Card';
import './itemlist.css';
import useProducts from '../customHooks/useProducts';

function ItemList() {

  const products = useProducts();
  console.log(products);

  return (
    <div className="item-detail">
      <h1 className='lista-productos'>Lista de Productos</h1>
      <div className="card-container">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
