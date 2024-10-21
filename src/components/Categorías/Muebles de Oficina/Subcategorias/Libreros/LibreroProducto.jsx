// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente LibreroItem que se usará para renderizar cada producto.
import LibreroItem from './LibreroItem';
import './Librero.css';

// Define el componente LibreroProducto que lista todos los productos de tipo Libreros.
const LibreroProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Librero con forma de arbol', precio: 700, img: require('./img/librero_arbol.jpg') },
        { id: 2, nombre: 'Librero flotante de pared', precio: 600, img: require('./img/librero_flotante.jpg') },
        { id: 3, nombre: 'Librero extra grande', precio: 500, img: require('./img/librero_grande.jpg') },
        { id: 4, nombre: 'Librero color gris', precio: 750, img: require('./img/librero_gris.jpg') },
        { id: 5, nombre: 'Librero forma irregular', precio: 650, img: require('./img/librero_irregular.jpg') },
        { id: 6, nombre: 'Librero con forma de manzana', precio: 900, img: require('./img/librero_manzana.jpg') },
        { id: 7, nombre: 'Librero con forma de mariposa pequeña', precio: 900, img: require('./img/librero_mariposa_pequeño.jpg') },
        { id: 8, nombre: 'Librero color negro', precio: 900, img: require('./img/librero_negro.jpg') },
        { id: 9, nombre: 'Librero con pisos', precio: 900, img: require('./img/librero_pisos.jpg') },
        { id: 10, nombre: 'Librero con forma de Yin Yang', precio: 900, img: require('./img/librero_yingyang.jpg') },
        { id: 11, nombre: 'Set de libreros', precio: 900, img: require('./img/set_libreros.jpg') },
        { id: 12, nombre: 'Librero Mariposa', precio: 900, img: require('./img/librero_mariposa.jpg') },

        





    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="librero-productos">
            {/* Títulos de la sección */}
            <h1>Catálogo de Libreros</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente LibreroItem */}
                {productos.map((producto) => (
                    <LibreroItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente LibreroProducto para que pueda ser utilizado en otras partes de la aplicación.
export default LibreroProducto;
