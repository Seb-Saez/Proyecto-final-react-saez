import { Link } from "react-router-dom";
import CartIcon from "../Carticon/CartIcon"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CompCarro = ()=>{

    const {cart} = useContext(CartContext)
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);



    return(
        <div className="cartContainer">
            <Link className="cart-logo" to="/cart">
                <CartIcon width={70}  />
                <div className="counterWidget">{totalItems}</div>
            </Link>
        </div>
    )
}

export default  CompCarro;

