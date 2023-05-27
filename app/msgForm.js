const usuario = JSON.parse(localStorage.getItem("usuario"));
const animal = localStorage.getItem("animal")

const nome = usuario[0].nome;
const telefone = usuario[0].telefone;

document.getElementById("nome").value = nome;
document.getElementById("telefone").value = telefone;
document.getElementById("animal").value = animal;

