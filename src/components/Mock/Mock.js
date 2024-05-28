import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";



export const obtenerDatosMock = async () => {

  const productosCol = collection(db, 'productos');
  const productosSnapshot = await getDocs(productosCol);
  const productosList = productosSnapshot.docs.map(doc => doc.data());
  return productosList; 
   
  // return fetch('https://fakestoreapi.com/products')
  //     .then(response => {
  //       if (!response.ok) { 
  //         throw new Error('Error de respuesta');
  //       }
  //       return response.json();
  //     })
  //     .catch(error => {
  //       console.error('Problema al realizar el fetch', error);
  //       throw error;
  //     });
  };