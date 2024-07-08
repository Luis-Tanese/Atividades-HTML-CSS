document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registroForm");
    const termos = document.getElementById("termos");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmar").value;
        let valid = true;
        if(!termos.checked){
            alert("Você precisa aceitar os termos de serviço.");
            valid = false;
        }
        if(senha !== confirmarSenha){
            alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
            valid = false;
        }
        if(valid){
            window.location.href = "/Sillycate/index1.html";
        }
    });
});
