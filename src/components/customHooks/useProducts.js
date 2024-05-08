import { useState, useEffect } from 'react';
import { obtenerDatosMock } from '../Mock/Mock';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    obtenerDatosMock()
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error al hacer el fetch:', error);
      });
  }, []);

  return products;
};

export default useProducts;