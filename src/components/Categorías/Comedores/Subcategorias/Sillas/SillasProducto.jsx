// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente SillasItem que se usará para renderizar cada producto.
import SillasItem from './SillasItem';

// Define el componente SillasProducto que lista todos los productos de tipo Lamparas.
const SillasProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Sillas Berringer', precio: 500, img: require('./img/silla_berringer.jpg') },
        { id: 2, nombre: 'Sillas Bolanburg', precio: 300, img: require('./img/silla_bolanburg.jpg') },
        { id: 3, nombre: 'Sillas Centiar', precio: 150, img: require('./img/silla_centiar.jpg') },
        { id: 4, nombre: 'Sillas Glambrey', precio: 400, img: require('./img/silla_glambrey.jpg') },
        { id: 5, nombre: 'Sillas Haddigan', precio: 250, img: require('./img/silla_haddigan.jpg') },
        { id: 6, nombre: 'Sillas Madanere', precio: 700, img: require('./img/silla_madanere.jpg') },
        { id: 7, nombre: 'Sillas Owingsville', precio: 120, img: require('./img/silla_owingsville.jpg') },
        { id: 8, nombre: 'Sillas Realyn', precio: 400, img: require('./img/silla_realyn.jpg') },
        { id: 9, nombre: 'Sillas Tripton', precio: 350, img: require('./img/silla_tripton.jpg') },
        { id: 10, nombre: 'Sillas Tylercreek', precio: 90, img: require('./img/silla_tylercreek.jpg') },
        { id: 11, nombre: 'Sillas Whitesburg', precio: 50, img: require('./img/silla_whitesburg.jpg') },
        { id: 12, nombre: 'Sillas Woodanville', precio: 200, img: require('./img/silla_woodanville.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="comedores-productos">
            {/* Títulos de la sección */}
            <h1>Comedores</h1>
            <h1>Sillas</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente SillasItem */}
                {productos.map((producto) => (
                    <SillasItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente SillasProducto para que pueda ser utilizado en otras partes de la aplicación.
export default SillasProducto;