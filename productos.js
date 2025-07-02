const container = document.getElementById("productos-container");

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => mostrarProductos(data.products));

function mostrarProductos(productos) {
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${producto.thumbnail}" alt="${producto.title}" />
      <h3>${producto.title}</h3>
      <p>💵 $${producto.price}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
    container.appendChild(card);
  });
}

function agregarAlCarrito(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(producto => {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado al carrito 🛒");
    });
}