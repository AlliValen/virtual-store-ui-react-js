// Importa React para definir un componente funcional.
import React from 'react';
import './SillasExterior.css';
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

// Define el componente EscritorioProducto que lista todos los productos de tipo Escritorios.
const SillasExteriorProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: '  ', precio: 500, img: require('./img/  ') },
        { id: 2, nombre: '  ', precio: 400, img: require('./img/  ') },
        { id: 3, nombre: '  ', precio: 300, img: require('./img/  ') },
        { id: 4, nombre: '  ', precio: 450, img: require('./img/  ') },
        { id: 5, nombre: '  ', precio: 350, img: require('./img/  ') },
        { id: 6, nombre: '  ', precio: 600, img: require('./img/  ') },
        { id: 7, nombre: '  ', precio: 600, img: require('./img/  ') },
        { id: 8, nombre: '  ', precio: 600, img: require('./img/  ') },
        { id: 9, nombre: '  ', precio: 600, img: require('./img/  ') },
        { id: 10, nombre: '  ', precio: 600, img: require('./img/  ') },
        { id: 11, nombre: '  ', precio: 600, img: require('./img/  ') },
        { id: 12, nombre: '  ', precio: 600, img: require('./img/  ') },

    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="sala-productos">
            <div className="title-container"> {/* Contenedor del título */}
            <h1>Productos de Muebles de Patio</h1>
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

// Exporta el componente EscritorioProducto para que pueda ser utilizado en otras partes de la aplicación.
export default SillasExteriorProducto;
