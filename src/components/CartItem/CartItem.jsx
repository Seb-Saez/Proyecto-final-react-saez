import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./CartItem.css"

const CartItem = ({item})=> {

const { addToCart , removeFromCart} = useContext(CartContext)



    return (
      <div key={item} className="cartitem-container">
        <div className="cartitem-card">
          <img src={`${item.product.image}`} alt={item.product.title} />
          <div className="cartitem-info" >
            <h3>{item.product.title}</h3>
            <p>Precio: ${item.product.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
        </div>
        <div className="cartitem-btn-container">
          <button onClick={() => removeFromCart(item.product.id, 1)}>-</button>
          <button onClick={() => addToCart(item.product, 1)}>+</button>
        </div>
      </div>
    );
}

export default CartItem;