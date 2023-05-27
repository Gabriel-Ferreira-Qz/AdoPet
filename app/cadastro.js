const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const listaRespostas = [{
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "senha": e.target.elements["senha"].value,
        "senhaConfirm": e.target.elements["senhaConfirm"].value,
    }]
    
    if (senha.value == senhaConfirm.value) {
        localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
        
        window.location.href = './login.html';
    } else {
        alert("As senhas não se conferem!");
    }
})


