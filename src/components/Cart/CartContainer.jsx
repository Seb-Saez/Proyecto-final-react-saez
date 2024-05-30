import { useContext } from "react";
import CartDetail from "../CartDetail/CartDetail";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartContainer.css"

const CartContainer = ()=>{

    const {cart, clearCart, cartTotal} = useContext(CartContext);


    return(
        <div className="Cart-container">
            <h1>Tu carrito </h1>
            {cart.length === 0 ? (
            <p>Aun no hay productos en tu carrito</p>
        ) : (
            <CartDetail cart={cart} />   // cartTotal={cartTotal}
            )}
            <div className="btn-container" >
                <h2>Total: ${cartTotal} </h2>
                <Link className="btn-checkout" to="/checkout" > Finalizar mi compra </Link>
                <button className="btn-clear" onClick={clearCart} >Vaciar carrito</button>
            </div>
        </div>
    )
}
 export default CartContainer;


