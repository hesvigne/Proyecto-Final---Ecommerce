const carritoContainer = document.getElementById("carrito-container");
const vaciarBtn = document.getElementById("vaciar-btn");
const finalizarBtn = document.getElementById("finalizar-btn");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length === 0) {
  carritoContainer.innerHTML = "<p>El carrito está vacío</p>";
} else {
  carrito.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${producto.thumbnail}" alt="${producto.title}" />
      <h3>${producto.title}</h3>
      <p>💵 $${producto.price}</p>
    `;
    carritoContainer.appendChild(card);
  });
}

vaciarBtn.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  carritoContainer.innerHTML = "<p>Carrito vacío 😌</p>";
});

finalizarBtn.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  alert("¡Gracias por tu compra! 🛍️");
  window.location.href = "index.html";
});