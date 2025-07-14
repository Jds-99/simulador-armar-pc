//Simulador de tienda de hardware
//HardCodeo los productos de mi tienda
const productos = [
  { id: 1, nombre: "intel i3", precio: 115000 },
  { id: 2, nombre: "intel i5", precio: 150000 },
  { id: 3, nombre: "intel i7", precio: 250000 },
  { id: 4, nombre: "ryzen 3", precio: 75000 },
  { id: 5, nombre: "ryzen 5", precio: 110000 },
  { id: 6, nombre: "ryzen 7", precio: 200000 },
  { id: 7, nombre: "Ashrock B450", precio: 85000 },
  { id: 8, nombre: "Asus 520M", precio: 120000 },
  { id: 9, nombre: "Gigabyte H610", precio: 146000 },
  { id: 10, nombre: "Msi B760", precio: 230000 },
  { id: 11, nombre: "Memoria 8 GB", precio: 25000 },
  { id: 12, nombre: "Memoria 16 GB", precio: 50000 }
];
//Traigo los elementos del dom
const contenedor = document.getElementById("productos");
const carritoLista = document.getElementById("carrito");
const btnComprar = document.getElementById("comprar");
//Creo un objeto carrito, con metodos para agregar un producto, limpiar, cargar el carrito en el localStorage
const Carrito = {
  lista: [],
  agregar(producto) {
    this.lista.push(producto);
    localStorage.setItem("carrito", JSON.stringify(this.lista));
    mostrarCarrito();
  },
  limpiar() {
    this.lista = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
  },
  cargar() {
    const guardado = JSON.parse(localStorage.getItem("carrito"));
    if (guardado) {
      this.lista = guardado;
    }
    mostrarCarrito();
  }
};
//Muestra en el html cada producto con nombre, precio y botón "Agregar". A cada botón le pone un event listener que 
// llama a 
// Carrito.agregar()
function mostrarProductos() {
  productos.forEach((prod) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${prod.nombre}</strong> - $${prod.precio} 
      <button id="add-${prod.id}">Agregar</button>
    `;
    contenedor.appendChild(div);

    document.getElementById(`add-${prod.id}`).addEventListener("click", () => {
      Carrito.agregar(prod);
    });
  });
}
//Muestra en el html el carrito con los productos, creando para cada uno un elemento li
function mostrarCarrito() {
  carritoLista.innerHTML = "";
  Carrito.lista.forEach((prod, index) => {
    const li = document.createElement("li");
    li.textContent = `${prod.nombre} - $${prod.precio}`;
    carritoLista.appendChild(li);
  });
}

//Boton de compra, con un evento click que hace una alerta y limpia el carrito
btnComprar.addEventListener("click", () => {
  alert("¡Compra realizada!");
  Carrito.limpiar();
});

function app(){
    Carrito.cargar();
    mostrarProductos();
}

//Ejecuto la aplicacion
app()