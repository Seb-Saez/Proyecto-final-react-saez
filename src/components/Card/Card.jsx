import React from 'react';

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-price">${product.price}</p>
        <p className="card-category">{product.category}</p>
        <div className="card-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
      </div>
    </div>
  );
}

export default Card;
