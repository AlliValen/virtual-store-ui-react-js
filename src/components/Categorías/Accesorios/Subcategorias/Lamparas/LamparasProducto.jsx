const LamparasProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Lampara biconica color blanco', precio: 500, img: require('./img/lampara_biconica.jpg') },
        { id: 2, nombre: 'Lampara luz blanca', precio: 300, img: require('./img/lampara_blanca.jpg') },
        { id: 3, nombre: 'Lampara estilo cuadrada luz amarilla', precio: 150, img: require('./img/lampara_cuadrada.jpg') },
        { id: 4, nombre: 'Lampara estilo en luna con difusor', precio: 400, img: require('./img/lampara_de_luna.jpg') },
        { id: 5, nombre: 'Lampara para mesa de noche', precio: 250, img: require('./img/lampara_de_mesa.jpg') },
        { id: 6, nombre: 'Lampara en estilo de flor', precio: 700, img: require('./img/lampara_flor.jpg') },
        { id: 7, nombre: 'Lampara blanca en forma irregular', precio: 120, img: require('./img/lampara_irregular_blanca.jpg') },
        { id: 8, nombre: 'Lampara de pie estilo largo', precio: 400, img: require('./img/lampara_larga.jpg') },
        { id: 9, nombre: 'Lampara de mesa en estilo de madera', precio: 350, img: require('./img/lampara_madera.jpg') },
        { id: 10, nombre: 'Lampara en color negro', precio: 90, img: require('./img/lampara_negra.jpg') },
        { id: 11, nombre: 'Lampara de pie para sala de estar', precio: 50, img: require('./img/lampara_pie.jpg') },
        { id: 12, nombre: 'Trio de lamparas de madera', precio: 200, img: require('./img/trio_lamparas_madera.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="lamparas-productos">
            {/* Títulos de la sección */}
            <h1>Accesorios</h1>
            <h1>Lamparas</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente LamparasItems */}
                {productos.map((producto) => (
                    <LamparasItems key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente LamparasProducto para que pueda ser utilizado en otras partes de la aplicación.
export default LamparasProducto;
