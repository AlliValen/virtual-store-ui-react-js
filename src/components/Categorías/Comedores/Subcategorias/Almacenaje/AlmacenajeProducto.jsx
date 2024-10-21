// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente AlmacenajeItem que se usará para renderizar cada producto.
import AlmacenajeItem from './AlmacenajeItem';

// Define el componente AlmacenajeProducto que lista todos los productos de tipo Lamparas.
const AlmacenajeProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Almacenaje caitbrook', precio: 500, img: require('./img/almacenaje_caitbrook.jpg') },
        { id: 2, nombre: 'Almacenaje Haddigan', precio: 300, img: require('./img/almacenaje_haddigan.jpg') },
        { id: 3, nombre: 'Almacenaje havalance', precio: 150, img: require('./img/almacenaje_havalance.jpg') },
        { id: 4, nombre: 'Almacenaje Johnelle', precio: 400, img: require('./img/almacenaje_johnelle.jpg') },
        { id: 5, nombre: 'Almacenaje Moriville', precio: 250, img: require('./img/almacenaje_moriville.jpg') },
        { id: 6, nombre: 'Almacenaje Ralene', precio: 700, img: require('./img/almacenaje_ralene.jpg') },
        { id: 7, nombre: 'Almacenaje Realyn', precio: 120, img: require('./img/almacenaje_realyn.jpg') },
        { id: 8, nombre: 'Almacenaje Tylercreek', precio: 400, img: require('./img/almacenaje_tylercreek.jpg') },
        { id: 9, nombre: 'Almacenaje Valebeck', precio: 350, img: require('./img/almacenaje_valebeck.jpg') },
        { id: 10, nombre: 'Almacenaje Whitesburg', precio: 90, img: require('./img/almacenaje_whitesburg.jpg') },
        { id: 11, nombre: 'Almacenaje Bolanburg', precio: 50, img: require('./img/gabinete_bolanburg.jpg') },
        { id: 12, nombre: 'Gabinete Tylercreek', precio: 200, img: require('./img/gabinete_tylercreek.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="comedores-productos">
            {/* Títulos de la sección */}
            <h1>Comedores</h1>
            <h1>Almacenaje</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente RelojesItem */}
                {productos.map((producto) => (
                    <AlmacenajeItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente AlmacenajeProducto para que pueda ser utilizado en otras partes de la aplicación.
export default AlmacenajeProducto;
