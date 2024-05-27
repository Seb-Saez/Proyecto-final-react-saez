import './cardDetail.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCounter from '../ItemCounter/ItemCounter';
import useCount from '../customHooks/useCount';

const CardDetail = ({ product }) => {
  if (!product) {
    return <div className='cargando'>Cargando...</div>; 
  }

  const { addToCart } = useContext(CartContext); 
  const { contador, incrementarContador, decrementarContador, reset } = useCount();

  const añadirAlCarrito = () => {
    if (contador === 0) {  
      alert("Debe seleccionar al menos 1 item para agregar al carrito");
    } else {
      addToCart(product, contador);
      reset();
    }
  };
  return (
    <div className="card-detail">
      <div className='detail1'>
        <h4 className="detail-title">{product.title}</h4>
        <img className='detail-img' src={`${product.image}`} alt={product.title} />
      </div>
      <div className='detail2'>
        <p className="description">Detalles</p>
        <p className="detail-description prod-arriba">{product.description}</p>
        <p className="description">Precio</p>
        <p className="detail-price prod-arriba">${product.price}</p>
        <ItemCounter 
          contador={contador} 
          incrementarContador={incrementarContador} 
          decrementarContador={decrementarContador} 
          reset={reset} 
        />
        <button className='btn-reset btn2' onClick={reset}>Reset</button>
        <button className='añadir-carrito btn2' 
         onClick={añadirAlCarrito}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default CardDetail;
