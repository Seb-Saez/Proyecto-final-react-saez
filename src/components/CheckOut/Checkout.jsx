import { useContext, useState } from "react";
import CartDetail from "../CartDetail/CartDetail";
import { CartContext } from "../Context/CartContext";
import "./Checkout.css"
import useBuyer from "../customHooks/useBuyer";
import { collection, addDoc, getFirestore} from "firebase/firestore"

const Checkout = ()=>{

    const {cart, clearCart, cartTotal} = useContext(CartContext);
    const {buyer, handleInputChange } = useBuyer();
    const [orderId, setOrderId] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
    

    const order = { 
      buyer, 
      cart,
    };

    const db = getFirestore();

    console.log(order);
    clearCart();

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, order)
     .then((doc) => {
      setOrderId(doc.id);
     })

  
  }

  if (orderId){
    return(
      <div className="checkout-container">
        <h2>Tu compra fue realizada con exito!</h2>
        <p>Tu numero de orden es: {orderId} </p>
      </div>
    )
  }

    return (
      <div className="checkout-container">
        <form className="form-container"  onSubmit={handleSubmit} >
          <h2>Datos del comprador</h2>
          <div className="inputs-container">
            <div>
              <label htmlFor="" type="" name="">
                Nombre y Apellido:
              </label>
              <input type="text" name="name" placeholder="Nombre del comprador"  value={buyer.name} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="" type="" name="">
                eMail:
              </label>
              <input type="email" name="email" placeholder="Direccion de Mail" value={buyer.email} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="" type="" name="">
                Telefono:
              </label>
              <input type="phone" name="phone" placeholder="Nº de telefono" value={buyer.phone} onChange={handleInputChange} />
            </div>
          </div>
          <div className="cart-checkout">
            <h3>Resumen de mi pedido</h3>
            <CartDetail cart={cart} />
            <h2>Total a pagar: ${cartTotal} </h2>
            <button className="btn-finish" type="submit">Realizar pedido</button>
          </div>
        </form>
      </div>
    );
}
export default Checkout;