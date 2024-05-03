import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
          console.log(json);
          setProducts(json);
        });
    }, []);

  return (
    <div className="item-list">
      <h1>Lista de Productos</h1>
      <div className="card-container">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
