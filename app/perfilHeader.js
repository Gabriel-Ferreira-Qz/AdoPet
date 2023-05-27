const fotoDePerfil = localStorage.getItem("foto");
const fotoHeader = document.getElementById("foto-header")

fotoHeader.src = fotoDePerfil ? fotoDePerfil : "./img/Usuario.svg";