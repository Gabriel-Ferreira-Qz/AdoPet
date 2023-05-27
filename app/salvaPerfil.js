const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const perfil = [{
        "nome": e.target.elements["nome"].value,
        "telefone": e.target.elements["telefone"].value,
        "cidade": e.target.elements["cidade"].value,
        "sobre": e.target.elements["sobre"].value
    }]

    localStorage.setItem("usuario", JSON.stringify(perfil))

    window.location.href = './home.html'
})


const cadastro = JSON.parse(localStorage.getItem("cadastro"));
const usuario = JSON.parse(localStorage.getItem("usuario"));
const fotoDePerfil = localStorage.getItem("foto");

cadastro.forEach((cadastro) => {
    usuario.forEach((usuario) => {

        mantemDados(cadastro, usuario,);

    });
});

function mantemDados(cadastro, usuario,) {
    document.getElementById("nome").value = cadastro.nome;
    document.getElementById("telefone").value = usuario.telefone;
    document.getElementById("cidade").value = usuario.cidade;
    document.getElementById("sobre").value = usuario.sobre;
    document.getElementById("imagem").src = fotoDePerfil;
    document.getElementById("foto-header").src = fotoDePerfil;
}

