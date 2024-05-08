import React, { useState } from 'react';


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
        return <div>Cargando...</div>; 
    }

    return (
        <div className="card-detail">
            <h4 className="detail-title">{product.title}</h4>
            <img src={`${product.image}`} alt={product.title} />
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">${product.price}</p>
            <div className='counter-container'>
                <button className='btn-restar' onClick={decrementarContador} disabled={contador === 0}>-</button>
                <p>{contador}</p>
                <button className='btn-sumar' onClick={incrementarContador}>+</button>
            </div>
        </div>
    );
}

export default CardDetail;
