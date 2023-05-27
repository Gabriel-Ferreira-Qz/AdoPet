const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btnEnviar = document.getElementById("btnEnviar");
const mensagemErroLogin = document.getElementById("mensagem-erro-login")
const cadastro = JSON.parse(localStorage.getItem("cadastro") || "[]");

cadastro.forEach(e => usuarioLogin(e));

function usuarioLogin(e) {
    btnEnviar.addEventListener("click", btn => {
        btn.preventDefault();

        if (e.email == email.value && e.senha == senha.value) {
            window.location.href = "./home.html";
        } else {
            mensagemErroLogin.textContent = 'O email ou senha então incorretos.'
        }
    })
}