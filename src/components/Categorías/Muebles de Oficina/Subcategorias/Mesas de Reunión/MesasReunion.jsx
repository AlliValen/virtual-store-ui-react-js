// Importa React y el componente ProductoItem para utilizar dentro de la lista de productos.
import React from 'react';
import './MesasReunion.css'; // Importa el archivo CSS correctamente
import { FaShoppingCart } from 'react-icons/fa';
// Componente ProductoItem
const ProductoItem = ({ producto }) => {
    return (
        <div className="product-card">
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            <button className="add-to-cart-button">
                <FaShoppingCart /> Agregar al carrito
            </button>
        </div>
    );
};

// Define el componente sofas, que representará una lista de productos específicos de sala.
const mesasreunion = () => {
    // Lista de productos que contiene información básica sobre cada uno, 
    // incluye un id, nombre, precio e imagen asociada a cada producto.
    const productos = [
        { id: 1, nombre: '  ', precio: 500, img: require('./img/  ') },
        { id: 2, nombre: '  ', precio: 300, img: require('./img/  ') },
        { id: 3, nombre: '  ', precio: 150, img: require('./img/  ') },
        { id: 4, nombre: '  ', precio: 400, img: require('./img/  ') },
        { id: 5, nombre: '  ', precio: 250, img: require('./img/  ') },
        { id: 6, nombre: '  ', precio: 700, img: require('./img/  ') },
        { id: 7, nombre: '  ', precio: 120, img: require('./img/  ') },
        { id: 8, nombre: '  ', precio: 400, img: require('./img/  ') },
        { id: 9, nombre: '  ', precio: 350, img: require('./img/  ') },
        { id: 10, nombre: '  ', precio: 90, img: require('./img/  ') },
        { id: 11, nombre: '  ', precio: 50, img: require('./img/  ') },
        { id: 12, nombre: '  ', precio: 200, img: require('./img/  ') },
    ];

    // Renderiza el componente sofas. Muestra título y un grid de productos,
    // Cada producto se renderiza utilizando el componente ProductoItem.
    return (
        <div className="sala-productos">
            <div className="title-container"> {/* Contenedor del título */}
            <h1>Productos de Muebles de Oficina</h1>
            <div className="decorative-line"></div> {/* Línea decorativa */}
            </div>
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

export default mesasreunion;

