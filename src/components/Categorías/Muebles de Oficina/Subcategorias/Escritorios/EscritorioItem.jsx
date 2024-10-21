// Importa React para definir un componente funcional.
import React from 'react';

// Define el componente EscritorioItem, que recibe como prop un objeto de producto con nombre, precio e imagen.
const EscritorioItem = ({ producto }) => {
    // Extrae las propiedades del producto (nombre, precio e imagen) desde las props.
    const { nombre, precio, img } = producto;

    // Renderiza el componente. Muestra la imagen del producto, el nombre, el precio y un botón de "Agregar al carrito".
    return (
        <div className="producto-item">
            {/* Renderiza la imagen del producto utilizando la ruta proporcionada. 
                Usa el nombre del producto como texto alternativo (alt) en caso de que la imagen no se cargue. */}
            <img src={img} alt={nombre} className="producto-imagen" />
            {/* Muestra el nombre del producto en un encabezado h3. */}
            <h3>{nombre}</h3>
            {/* Muestra el precio del producto precedido por el símbolo de dólar. */}
            <p>Precio: ${precio}</p>
            {/* Renderiza un botón para agregar el producto al carrito de compras. */}
            <button className="btn-agregar">Agregar al carrito</button>
        </div>
    );
};

// Exporta el componente EscritorioItem para que pueda ser utilizado en otras partes de la aplicación.
export default EscritorioItem;
