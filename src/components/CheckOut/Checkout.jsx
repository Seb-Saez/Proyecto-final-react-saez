import { useContext } from "react";
import CartDetail from "../CartDetail/CartDetail";
import { CartContext } from "../Context/CartContext";
import "./Checkout.css"

const Checkout = ()=>{

    const {cart} = useContext(CartContext)


    return (
      <div className="checkout-container">
        <form className="form-container">
          <h2>Datos del comprador</h2>
          <div className="inputs-container">
            <div>
              <label htmlFor="" type="" name="">
                Nombre y Apellido:
              </label>
              <input type="text" placeholder="Nombre del comprador" />
            </div>
            <div>
              <label htmlFor="" type="" name="">
                eMail:
              </label>
              <input type="email" placeholder="Direccion de Mail" />
            </div>
            <div>
              <label htmlFor="" type="" name="">
                Repetir eMail:
              </label>
              <input type="email" placeholder="Repetir eMail" />
            </div>
          </div>
          <div className="cart-checkout">
            <h3>Resumen de mi pedido</h3>
            <CartDetail cart={cart} />
            <button className="btn-finish" type="submit">Realizar pedido</button>
          </div>
        </form>
      </div>
    );
}
export default Checkout;