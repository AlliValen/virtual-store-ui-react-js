// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente OttomansItem que se usará para renderizar cada producto.
import OttomansItem from './OttomansItem';

// Define el componente OttomansProductos que lista todos los productos de tipo Ottoman.
const OttomansProductos = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Ottoman Accrington', precio: 500, img: require('./img/ottoman_accrington.jpg') },
        { id: 2, nombre: 'Ottoman Baceno', precio: 300, img: require('./img/ottoman_baceno.jpg') },
        { id: 3, nombre: 'Ottoman Darcy Azul', precio: 150, img: require('./img/ottoman_darcy_azul.jpg') },
        { id: 4, nombre: 'Ottoman Darcy Negro', precio: 400, img: require('./img/ottoman_darcy_negro.jpg') },
        { id: 5, nombre: 'Ottoman Darcy', precio: 250, img: require('./img/ottoman_darcy.jpg') },
        { id: 6, nombre: 'Ottoman Dorsten', precio: 700, img: require('./img/ottoman_dorsten.jpg') },
        { id: 7, nombre: 'Ottoman Extra Grande', precio: 120, img: require('./img/ottoman_extra_grande.jpg') },
        { id: 8, nombre: 'Ottoman Harlesom', precio: 400, img: require('./img/ottoman_harlesom.jpg') },
        { id: 9, nombre: 'Ottoman Monaghan', precio: 350, img: require('./img/ottoman_monaghan.jpg') },
        { id: 10, nombre: 'Ottoman Nicorvo', precio: 90, img: require('./img/ottoman_nicorvo.jpg') },
        { id: 11, nombre: 'Ottoman Olsberg', precio: 50, img: require('./img/ottoman_olsberg.jpg') },
        { id: 12, nombre: 'Ottoman Traemore', precio: 200, img: require('./img/ottoman_traemore.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="sala-productos">
            {/* Títulos de la sección */}
            <h1>Productos de Sala</h1>
            <h1>Ottomans</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente OttomansItem */}
                {productos.map((producto) => (
                    <OttomansItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente OttomansProductos para que pueda ser utilizado en otras partes de la aplicación.
export default OttomansProductos;
