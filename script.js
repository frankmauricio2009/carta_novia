const fotos = [
  { src: "foto1.jpg", texto: "1. OJITOS ;3" },
  { src: "foto2.jpg", texto: "2. Una de las primeras veces que entre a tu casa 💕" },
  { src: "foto3.jpg", texto: "3. Mi novia version mariachi, TE AMOOOOOOOOOO🌹" },
  { src: "foto4.jpg", texto: "3. Una tarde de novios 🌹" },
  { src: "foto5.jpg", texto: "4. otra...🌹" },
  { src: "foto6.jpg", texto: "5. Ese cuerpazo tan hermoso que me vuelve loco!!!!, Te ves tan elegante como siempre 🌹" },
  { src: "foto7.jpg", texto: "6. ojitos cuando teniamos piercings🌹" },
  { src: "foto8.jpg", texto: "7. mas de ese mismo dia🌹" },
  { src: "foto9.jpg", texto: "8. Con gafas pareces actriz, HERMOSAAAAAAA JAJAJA, TE AMO MI VIDA 🌹" },
  { src: "foto10.jpg", texto:"9. En la tienda probandonos todo (la primera vez que fuimos a Bogota)🌹" },
  { src: "foto11.jpg", texto:"10. Comiendo en un restaurante elegante la primera vez que fuimos a Bogota 🌹" },
  { src: "foto12.jpg", texto:"11. De los primeros dias conociendonos🌹" },
];

let indice = 0;

function mostrarFoto() {
  document.getElementById("foto").src = fotos[indice].src;
  document.getElementById("texto").textContent = fotos[indice].texto;
}

function siguiente() {
  indice = (indice + 1) % fotos.length;
  mostrarFoto();
}

function anterior() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  mostrarFoto();
}
