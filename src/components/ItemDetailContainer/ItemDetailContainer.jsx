import React from 'react';
import useProducts from '../customHooks/useProducts';
import CardDetail from '../CardDetail/CardDetail';
import useProductId from '../customHooks/useProductId';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const products = useProducts();
    const productId = useProductId();

    const product = products.find(product => product.id === productId);
    return (
        <div className="detail-container">
            <CardDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;
