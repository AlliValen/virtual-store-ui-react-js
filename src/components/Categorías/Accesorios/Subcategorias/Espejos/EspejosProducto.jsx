// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente EspejosItem que se usará para renderizar cada producto.
import EspejosItem from './EspejosItem';

// Define el componente EspejosProductos que lista todos los productos de tipo Espejos.
const EspejosProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Espejo baño cuadrado', precio: 500, img: require('./img/espejo_baño_cuadrado.jpg') },
        { id: 2, nombre: 'Espejo champague italiano', precio: 300, img: require('./img/espejo_champague_italiano.jpg') },
        { id: 3, nombre: 'Espejo cuadrado negro', precio: 150, img: require('./img/espejo_cuadrado_negro.jpg') },
        { id: 4, nombre: 'Espejo para escritorio', precio: 400, img: require('./img/espejo_de_escritorio.jpg') },
        { id: 5, nombre: 'Espejo de pie', precio: 250, img: require('./img/espejo_de_pie.jpg') },
        { id: 6, nombre: 'Espejo irregular negro', precio: 700, img: require('./img/espejo_irregular_negro.jpg') },
        { id: 7, nombre: 'Espejo irregular rosado', precio: 120, img: require('./img/espejo_irregular_rosado.jpg') },
        { id: 8, nombre: 'Espejo con marco de madera', precio: 400, img: require('./img/espejo_marco_madera.jpg') },
        { id: 9, nombre: 'Espejo moderno para recibidor', precio: 350, img: require('./img/espejo_moderno_recibidor.jpg') },
        { id: 10, nombre: 'Espejo redondo dorado', precio: 90, img: require('./img/espejo_redondo_dorado.jpg') },
        { id: 11, nombre: 'Espejo redondo con luz led', precio: 50, img: require('./img/espejo_redondo_led.jpg') },
        { id: 12, nombre: 'Espejo redondo sencillo', precio: 200, img: require('./img/espejo_redondo_sencillo.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="espejos-productos">
            {/* Títulos de la sección */}
            <h1>Accesorios</h1>
            <h1>Espejos</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente EspejosItem */}
                {productos.map((producto) => (
                    <EspejosItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente EspejosProducto para que pueda ser utilizado en otras partes de la aplicación.
export default EspejosProducto;
