const form = document.getElementById("registroForm");
const senha = document.getElementById("senha").value;
const confirmarSenha = document.getElementById("confirmar").value;

document.addEventListener("DOMContentLoaded", function(){
    
    form.addEventListener("submit", function(event){
        if(senha !== confirmarSenha){
            alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
            event.preventDefault();
        }
    });
});