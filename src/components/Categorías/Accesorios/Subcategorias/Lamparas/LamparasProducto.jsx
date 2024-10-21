// Importa React para definir un componente funcional.
import React from 'react';
// Importa el componente PuffItems que se usará para renderizar cada producto.
import PuffItems from './PuffItems';

// Define el componente PuffProducto que lista todos los productos de tipo Puffs.
const PuffProducto = () => {
    // Define una lista de productos con sus propiedades id, nombre, precio e imagen.
    const productos = [
        { id: 1, nombre: 'Puff con forma de Basketball', precio: 500, img: require('./img/puff_basketball.jpg') },
        { id: 2, nombre: 'Puff cuadrado sin relleno', precio: 300, img: require('./img/puff_cuadrado_sinrelleno.jpg') },
        { id: 3, nombre: 'Puff extra grande', precio: 150, img: require('./img/puff_extra_grande.jpg') },
        { id: 4, nombre: 'Puff con forma de flor', precio: 400, img: require('./img/puff_flor.jpg') },
        { id: 5, nombre: 'Puff de tela gris', precio: 250, img: require('./img/puff_gris_tela.jpg') },
        { id: 6, nombre: 'Puff con forma de Hello Kitty', precio: 700, img: require('./img/puff_hellokitty.jpg') },
        { id: 7, nombre: 'Puff inflable material transparente', precio: 120, img: require('./img/puff_inflable.jpg') },
        { id: 8, nombre: 'Puff de tela peluche color blanco', precio: 400, img: require('./img/puff_peluche_blanco.jpg') },
        { id: 9, nombre: 'Puff de polipiel negro', precio: 350, img: require('./img/puff_polipiel_negro.jpg') },
        { id: 10, nombre: 'Puff redondo con forma de huella', precio: 90, img: require('./img/puff_redondo_huellita.jpg') },
        { id: 11, nombre: 'Puff redondo color rosado', precio: 50, img: require('./img/puff_redondo_rosa.jpg') },
        { id: 12, nombre: 'Puff color crema en forma triangular', precio: 200, img: require('./img/puff_triangulo_crema.jpg') },
    ];

    // Renderiza el componente. Muestra un título y un grid de productos que son mapeados desde el array de productos.
    return (
        <div className="puffs-productos">
            {/* Títulos de la sección */}
            <h1>Accesorios</h1>
            <h1>Puffs</h1>
            {/* Renderiza la lista de productos dentro de un contenedor de grid. */}
            <div className="productos-grid">
                {/* Recorre la lista de productos y para cada uno renderiza un componente PuffItems */}
                {productos.map((producto) => (
                    <PuffItems key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

// Exporta el componente EspejosProducto para que pueda ser utilizado en otras partes de la aplicación.
export default PuffProducto;
