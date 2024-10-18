// Importa React y el componente ProductoItem para utilizar dentro de la lista de productos.
import React from 'react';
import ProductoItem from './ProductoItem';

// Define el componente SalaProductos, que representará una lista de productos específicos de sala.
const SalaProductos = () => {
    // Lista de productos que contiene información básica sobre cada uno, 
    // incluye un id, nombre, precio e imagen asociada a cada producto.
    const productos = [
        { id: 1, nombre: 'Sofá de 3 café', precio: 500, img: require('./img/conjunto_sofas_cafes.jpg') },
        { id: 2, nombre: 'Conjunto sofas sencillo', precio: 300, img: require('./img/conjunto_sofas.jpg') },
        { id: 3, nombre: 'Sofá capehorn reclinable', precio: 150, img: require('./img/sofa_capehorn_reclinable.jpg') },
        // Producto 4 comentado temporalmente por fallas al dinamizar la imagen.
        // { id: 4, nombre: 'Conjunto Sofás Reclinables', precio: 400, img: require('./img/conjunto_sofas_reclinables.jpg') },
        { id: 5, nombre: 'Conjunto de sofas azul', precio: 250, img: require('./img/conjunto_sofas_azul.jpg') },
        { id: 6, nombre: 'Sofá de 3 azul', precio: 700, img: require('./img/sofa_de_tres_azul.jpg') },
        { id: 7, nombre: 'Sofá de 3 negro', precio: 120, img: require('./img/sofa_de_tres_negro.jpg') },
        { id: 8, nombre: 'Sofá de 3 sencillo', precio: 400, img: require('./img/sofa_de_tres.jpg') },
        { id: 9, nombre: 'Sofá Harleson', precio: 350, img: require('./img/sofa_harleson.jpg') },
        { id: 10, nombre: 'Sofá reclinable electrico', precio: 90, img: require('./img/sofa_reclinable_electrico.jpg') },
        { id: 11, nombre: 'Sofá reclinable', precio: 50, img: require('./img/sofa_reclinable.jpg') },
        { id: 12, nombre: 'Loveseat Sofa', precio: 200, img: require('./img/sofa_y_loveseat.jpg') },
    ];

    // Renderiza el componente SalaProductos. Muestra título y un grid de productos,
    // Cada producto se renderiza utilizando el componente ProductoItem.
    return (
        <div className="sala-productos">
            <h1>Productos de Sala</h1>
            <div className="productos-grid">
                {productos.map((producto) => (
                    // Mapea los productos para crear un componente ProductoItem por cada uno.
                    // Se pasa el producto como prop y se utiliza el id como clave.
                    <ProductoItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};


export default SalaProductos;
