import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../customHooks/useProducts';
import CardDetail from '../CardDetail/CardDetail'; // Importa el componente CardDetail
import useProductId from '../customHooks/useProductId';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const products = useProducts();
    const productId = useProductId();

    // Encuentra el producto correspondiente al ID de la URL
    const product = products.find(product => product.id === productId);

    return (
        <div className="detail-container">
            {/* Pasa el producto como una prop al componente CardDetail */}
            <CardDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;
