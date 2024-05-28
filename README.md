Mi Proyecto de E-commerce El Atelier | Shop 🛒

Características 🚀
React y Vite: El proyecto está desarrollado utilizando React, como framework mas Vite.
Firebase: Firebase se encarga de la base de datos y la autenticación.
Carrito de Compras: Los usuarios pueden agregar productos a su carrito, ver el total de items y proceder al checkout.
Checkout: Un formulario sencillo para recolectar la información del comprador y finalizar la compra.


Instalación y Uso 🔧
Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local.

Clona el repositorio:
-----------------------

git clone https://github.com/Seb-Saez/Proyecto-final-react-saez

-----------------------

Instala las dependencias:

-----------------------

npm install

-----------------------

Configura Firebase:

- Crea un archivo firebaseConfig.js en la carpeta src y añade la siguiente configuración:

-----------------------

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyB6nBtHaZO72G8y_tR_vn3a81USRO2dWxA",
  authDomain: "atelier-shop-proyect-react.firebaseapp.com",
  projectId: "atelier-shop-proyect-react",
  storageBucket: "atelier-shop-proyect-react.appspot.com",
  messagingSenderId: "552784386283",
  appId: "1:552784386283:web:5d84151cdc133b738e06ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

-----------------------


Inicia el servidor de desarrollo:

npm run dev 
Ahora se ver la aplicación, navegando a http://localhost:5173.

Estructura del Proyecto 📁

- src: Contiene todo el código fuente de la aplicación.

- components: Componentes reutilizables como el carrito de compras, checkout, y más.

- Context: Manejo del estado global con React Context.

- customHooks: Hooks personalizados para manejar funcionalidades específicas.

- firebaseConfig.js: Archivo de configuración de Firebase.