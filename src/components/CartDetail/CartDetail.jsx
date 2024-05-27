import CartItem from '../CartItem/CartItem';
import "./CartDetail.css"

const CartDetail = ({ cart }) => {
  return (
    <div className='cart-detail-container' >
      {cart.map((item) => (
        <CartItem key={item.product.id} item={item} /> 
      ))}
    </div>
  );
}

export default CartDetail;
