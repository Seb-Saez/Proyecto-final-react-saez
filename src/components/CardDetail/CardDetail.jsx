import React, { useState } from 'react';
import './cardDetail.css';


const CardDetail = ({ product }) => {
    const [contador, setContador] = useState(0);
    const incrementarContador = () => {
        setContador(contador + 1);
    };

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };
    if (!product) {
        return <div className='cargando'>Cargando...</div>; 
    }

    return (
        <div className="card-detail">
            <div className='detail1'>
                <h4 className="detail-title">{product.title}</h4>
                <img  className='detail-img' src={`${product.image}`} alt={product.title} />
            </div>
            <div className='detail2'>
                <p className="description">Detalles</p>
                <p className="detail-description prod-arriba">{product.description}</p>
                <p className="description">Precio</p>
                <p className="detail-price prod-arriba">${product.price}</p>
                <div className='counter-container'>
                    <p className="description">Cantidad</p>
                    <div className='counter'>
                        <button className='btn-restar' onClick={decrementarContador} disabled={contador === 0}>-</button>
                        <p className='detail-contador'>{contador}</p>
                        <button className='btn-sumar' onClick={incrementarContador} disabled={contador === 10} >+</button>
                    </div>
                    <button className='añadir-carrito'>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;
