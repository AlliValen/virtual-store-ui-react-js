// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente MueblesSalaItems que se usará para renderizar cada producto.
import MueblesSalaItems from './MueblesSalaItems';

// Define el componente MueblesSalaProductos que lista todos los productos de tipo MueblesSala.
const MueblesSalaProductos = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Mesa Airdon', precio: 500, img: require('./img/mesa_airdon.jpg') },
        { id: 2, nombre: 'Mesa Hollynyx', precio: 300, img: require('./img/mesa_hollynyx.jpg') },
        { id: 3, nombre: 'Mesa Kisper', precio: 150, img: require('./img/mesa_kisper.jpg') },
        { id: 4, nombre: 'Mesa Laney', precio: 400, img: require('./img/mesa_laney.jpg') },
        { id: 5, nombre: 'Mesa Mallacar', precio: 250, img: require('./img/mesa_mallacar.jpg') },
        { id: 6, nombre: 'Mesa Maysville', precio: 700, img: require('./img/mesa_maysville.jpg') },
        { id: 7, nombre: 'Mesa Rollynx', precio: 120, img: require('./img/mesa_rollynx.jpg') },
        { id: 8, nombre: 'Mesa Stanah', precio: 400, img: require('./img/mesa_stanah.jpg') },
        { id: 9, nombre: 'Mesa Theo', precio: 350, img: require('./img/mesa_theo.jpg') },
        { id: 10, nombre: 'Mesa Todoe', precio: 90, img: require('./img/mesa_todoe.jpg') },
        { id: 11, nombre: 'Mesa TylerCreek', precio: 80, img: require('./img/mesa_tylercreek.jpg') },
        { id: 12, nombre: 'Mesa Waston', precio: 200, img: require('./img/mesa_waston.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="sala-productos">
            {/* Títulos de la sección */}
            <h1>Productos de Sala</h1>
            <h1>Muebles de Sala</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente MueblesSalaItem */}
                {productos.map((producto) => (
                    <MueblesSalaItems key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente OttomansProductos para que pueda ser utilizado en otras partes de la aplicación.
export default MueblesSalaProductos;
