// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente EscritorioItem que se usará para renderizar cada producto.
import EscritorioItem from './EscritorioItem';

// Define el componente EscritorioProducto que lista todos los productos de tipo Escritorios.
const EscritorioProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Escritorio Blanco', precio: 500, img: require('./img/escritorio_blanco.jpg') },
        { id: 2, nombre: 'Escritorio Esquinero', precio: 400, img: require('./img/escritorio_esquinero_negro.jpg') },
        { id: 3, nombre: 'Escritorio Esquinero Rosa', precio: 300, img: require('./img/escritorio_esquinero_rosado.jpg') },
        { id: 4, nombre: 'Escritorio Flotante', precio: 450, img: require('./img/escritorio_flotante .jpg') },
        { id: 5, nombre: 'Escritorio con Gabetas', precio: 350, img: require('./img/escritorio_gabetas.jpg') },
        { id: 6, nombre: 'Escritorio Gamer', precio: 600, img: require('./img/escritorio_gamer.jpg') },
        { id: 7, nombre: 'Escritorio Grande', precio: 600, img: require('./img/escritorio_grande.jpg') },
        { id: 8, nombre: 'Escritorio Gris', precio: 600, img: require('./img/escritorio_gris_moderno.jpg') },
        { id: 9, nombre: 'Escritorio de Madera', precio: 600, img: require('./img/escritorio_madera.jpg') },
        { id: 10, nombre: 'Escritorio Moderno', precio: 600, img: require('./img/escritorio_moderno.jpg') },
        { id: 11, nombre: 'Escritorio Negro', precio: 600, img: require('./img/escritorio_negro.jpg') },
        { id: 12, nombre: 'Escritorio Pequeño', precio: 600, img: require('./img/escritorio_pequeño.jpg') },

    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="escritorio-productos">
            {/* Títulos de la sección */}
            <h1>Escritorios</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente EscritorioItem */}
                {productos.map((producto) => (
                    <EscritorioItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente EscritorioProducto para que pueda ser utilizado en otras partes de la aplicación.
export default EscritorioProducto;
