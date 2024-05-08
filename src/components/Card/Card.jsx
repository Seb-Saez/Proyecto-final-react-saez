import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card({ product }) {
  return (
    <div className="card">
      <h5 className="card-category">{product.category}</h5>
      <img src={`${product.image}`} alt={product.title} />
      <h4 className="card-title">{product.title}</h4>
      <p className="card-price">${product.price}</p>
      <Link className='ver-mas' to={`/item/${product.id}`}>Ver mas</Link>
    </div>
  );
}

export default Card;
