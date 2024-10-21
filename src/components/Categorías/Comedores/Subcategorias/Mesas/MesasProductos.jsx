// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente MesasItem que se usará para renderizar cada producto.
import MesasItem from './MesasItem';

// Define el componente MesasProducto que lista todos los productos de tipo Lamparas.
const MesasProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Mesa Bolanburg', precio: 500, img: require('./img/mesa_bolanburg.jpg') },
        { id: 2, nombre: 'Mesa Caitbrook', precio: 300, img: require('./img/mesa_caitbrook.jpg') },
        { id: 3, nombre: 'Mesa Extensión Haddigan', precio: 150, img: require('./img/mesa_extension_haddigan.jpg') },
        { id: 4, nombre: 'Mesa Glambrey', precio: 400, img: require('./img/mesa_glambrey.jpg') },
        { id: 5, nombre: 'Mesa Haddigan', precio: 250, img: require('./img/mesa_haddigan.jpg') },
        { id: 6, nombre: 'Mesa Kavara', precio: 700, img: require('./img/mesa_kavara.jpg') },
        { id: 7, nombre: 'Mesa Kimonte', precio: 120, img: require('./img/mesa_kimonte.jpg') },
        { id: 8, nombre: 'Mesa Moriville', precio: 400, img: require('./img/mesa_moriville.jpg') },
        { id: 9, nombre: 'Mesa Owingsville', precio: 350, img: require('./img/mesa_owingsville.jpg') },
        { id: 10, nombre: 'Mesa Ralene', precio: 90, img: require('./img/mesa_ralene.jpg') },
        { id: 11, nombre: 'Mesa Whitesburg', precio: 50, img: require('./img/mesa_whitesburg.jpg') },
        { id: 12, nombre: 'Mesa Woodanville', precio: 200, img: require('./img/mesa_woodanville.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="comedores-productos">
            {/* Títulos de la sección */}
            <h1>Comedores</h1>
            <h1>Mesas</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente MesasItem */}
                {productos.map((producto) => (
                    <MesasItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente MesasProducto para que pueda ser utilizado en otras partes de la aplicación.
export default MesasProducto;