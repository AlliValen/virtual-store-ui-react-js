// Importa React y el componente TVItem para representar cada producto.
import React from 'react';
import ProductoItem from './TVItem';

// Define el componente TVProductos que muestra una lista de productos de TV.
const TVProductos = () => {
    // Lista de productos con sus propiedades (id, nombre, precio e imagen).
    const productos = [
        { id: 1, nombre: 'Soporte Bellaby', precio: 500, img: require('./img/soporte_bellaby.jpg') },
        { id: 2, nombre: 'Soporte Bolanburg', precio: 300, img: require('./img/soporte_bolanburg.jpg') },
        { id: 3, nombre: 'Soporte Budmore', precio: 150, img: require('./img/soporte_budmore.jpg') },
        { id: 4, nombre: 'Soporte Chanceen', precio: 400, img: require('./img/soporte_chanceen.jpg') },
        { id: 5, nombre: 'Soporte Harpan', precio: 250, img: require('./img/soporte_harpan.jpg') },
        { id: 6, nombre: 'Soporte Realyn', precio: 700, img: require('./img/soporte_realyn.jpg') },
        { id: 7, nombre: 'Soporte Roddinton', precio: 120, img: require('./img/soporte_roddinton.jpg') },
        { id: 8, nombre: 'Soporte Sommeford', precio: 400, img: require('./img/soporte_sommeford.jpg') },
        { id: 9, nombre: 'Soporte Todoe', precio: 350, img: require('./img/soporte_todoe.jpg') },
        { id: 10, nombre: 'Soporte Tylercreek', precio: 90, img: require('./img/soporte_tylercreek.jpg') },
        { id: 11, nombre: 'Soporte Willowton', precio: 50, img: require('./img/soporte_willowton.jpg') },
        { id: 12, nombre: 'Soporte Trinell', precio: 200, img: require('./img/trinell_soporte.jpg') },
    ];

    // Renderiza la lista de productos en una cuadrícula.
    return (
        <div className="sala-productos">
            <h1>Productos de Sala</h1>
            <div className="productos-grid">
                {productos.map((producto) => (
                    <ProductoItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente TVProductos para su uso en otras partes de la aplicación.
export default TVProductos;
