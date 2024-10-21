// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente AlmacenamientoItem que se usará para renderizar cada producto.
import AlmacenamientoItem from './AlmacenamientoItem';

// Define el componente AlmacenamientoProducto que lista todos los productos de tipo Almacenamiento.
const AlmacenamientoProductos = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Armario Azul de madera', precio: 1200, img: require('./img/armario_azul_madera.jpg') },
        { id: 2, nombre: 'Armario color azul', precio: 350, img: require('./img/armario_azul.jpg') },
        { id: 3, nombre: 'Armario blanco de madera', precio: 200, img: require('./img/armario_blanco_madera.jpg') },
        { id: 4, nombre: 'Armario blanco pequeño', precio: 150, img: require('./img/armario_blanco_pequeño.jpg') },
        { id: 5, nombre: 'Armario Blanco', precio: 400, img: require('./img/armario_blanco.jpg') },
        { id: 6, nombre: 'Armario Grande', precio: 80, img: require('./img/armario_gigante.jpg') },
        { id: 7, nombre: 'Armario negro', precio: 80, img: require('./img/armario_negro.jpg') },
        { id: 8, nombre: 'Armario verde', precio: 80, img: require('./img/armario_verde.jpg') },
        { id: 9, nombre: 'Gabetero Blanco pequeño', precio: 80, img: require('./img/gabetero_blanco_pequeño.jpg') },
        { id: 10, nombre: 'Gabetero blanco', precio: 80, img: require('./img/gabetero_blanco.jpg') },
        { id: 11, nombre: 'Gabetero con espejo', precio: 80, img: require('./img/gabetero_espejo.jpg') },
        { id: 12, nombre: 'Gabetero negro con espejo', precio: 80, img: require('./img/gabetero_negro_espejo.jpg') },
        
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="almacenamiento-productos">
            {/* Títulos de la sección */}
            <h1>Almacenamiento</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente AlmacenamientoItem */}
                {productos.map((producto) => (
                    <AlmacenamientoItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente AlmacenamientoProducto para que pueda ser utilizado en otras partes de la aplicación.
export default AlmacenamientoProductos;
