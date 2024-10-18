// Importa React para definir el componente funcional.
import React from 'react';

// Define el componente TVItem que recibe un objeto producto como prop.
const TVItem = ({ producto }) => {
    // Desestructura las propiedades nombre, precio e img del objeto producto.
    const { nombre, precio, img } = producto;

    // Renderiza el componente que muestra la imagen del producto, su nombre, precio y un botón para agregar al carrito.
    return (
        <div className="producto-item">
            {/* Muestra la imagen del producto usando la propiedad img, y establece el nombre como texto alternativo */}
            <img src= {img} alt={nombre} className="producto-imagen" />
            {/* Muestra el nombre del producto */}
            <h3>{nombre}</h3>
            {/* Muestra el precio del producto */}
            <p>Precio: ${precio}</p>
            {/* Botón para agregar el producto al carrito */}
            <button className="btn-agregar">Agregar al carrito</button>
        </div>
    );
};

// Exporta el componente TVItem para que pueda ser usado en otros lugares de la aplicación.
export default TVItem;
