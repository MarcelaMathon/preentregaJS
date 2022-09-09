const itemsCatalogo = [
    {
        id: '1',
        nombre: 'Maillot',
        precio: 1790,
        descripcion: 'Tejido liso en el cuerpo (85% Poliester-15% Lycra). Tejido en panel en las mangas y laterales para mejorar el flujo de aire (90% Poliester-10% Lycra). Tres bolsillos traseros. Borde elástico en la parte inferior que mantiene la camiseta en su lugar. Protección UV50+',
    },
    {
        id: '2',
        nombre: 'Chaleco cortaviento',
        precio: 1990,
        descripcion: 'Delantera repelente al viento y al agua, y lycra en la espalda. Cuenta con 3 bolsillos traseros. Gracias a su liviandad este chaleco lo puedes poner en el bolsillo trasero de tu maillot de ciclismo y adaptarte rápidamente a los cambios climáticos.',
    },
    {
        id: '3',
        nombre: 'Calza corta',
        precio: 2590,
        descripcion: 'Lycra con 4 sentidos de estiramiento. 81% Poliester - 19% Lycra - Protección UV50+. Badana altamente anatómica. Puños de tela con silicona para proporcionar un agarre comodo y suave.',
    },
    {
        id: '4',
        nombre: 'Calza larga',
        precio: 2690,
        descripcion: 'Lycra con 4 sentidos de estiramiento. 81% Poliester - 19% Lycra -Protección UV50+. Badana altamente anatómica. Paneles reflectivos en parte posterior baja de la pierna.',
    },
    {
        id: '5',
        nombre: 'Campera neopreno',
        precio: 2390,
        descripcion: 'Campera cálida confeccionada con telas elásticas. Diseñada para paseos intensos en condiciones de otoño y primavera. Su elasticidad garantiza un gran ajuste y libertad de movimiento. Cuenta con tres bolsillos traseros y una pieza de silicona para mantener la campera en su lugar.',
    },
    {
        id: '6',
        nombre: 'Campera térmica impermeable',
        precio: 2790,
        descripcion: 'Campera liviana de tela firme en frente, espalda y mangas, elástica en los laterales. Con paneles reflectivos que dan mejor visibilidad en la noche y días grises. Frente y espalda: 100% Poliester impermeable. Laterales: 90% Poliester 10% Lycra.',
    },
];


class Producto{
    constructor(id, nombre, precio, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    obtenerInfo(){
        return `${this.id} - ${this.nombre} $${this.precio}`;
    }
    obtenerAviso(){
        return `${this.nombre} $${this.precio}`;
    }
}

const carrito = [];

const obtenerInfoProductos = (productosArray) => {
    return productosArray.map((elemento)=>  elemento.obtenerInfo()).join('\n');
}
const agregarAlCarritoById = (productos) => {
    const infoProductos = obtenerInfoProductos(productos);
    const id = prompt('Ingrese el número del producto que desea agregar al carrito:\n' + infoProductos);
    const producto = productos.find((producto) => producto.id === id);
    if (!producto) return;
    carrito.push(producto);
    alert('Producto agregado al carrito');
}
const imprimirCarrito = (carritoDeProductos) => {
    carritoDeProductos.forEach((producto) => {
        console.log(producto.obtenerAviso());
    });
}
const obtenerTotal = (productosArray) => {
    let total = 0;
    productosArray.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}


const productos = itemsCatalogo.map(producto => new Producto(
    producto.id,
    producto.nombre,
    producto.precio,
    producto.descripcion,
));

agregarAlCarritoById(productos);
agregarAlCarritoById(productos);
agregarAlCarritoById(productos);

alert('Abre la consola para ver el resumen de tu compra');
imprimirCarrito(carrito);
console.log('TOTAL: $ ' , obtenerTotal(carrito));