const precoIngresso = 100;
const form = document.getElementById("form-inscricao");

function processarInscricao(nome, idade, prossuiCupom) {
    let precoFinal = precoIngresso;

    if(idade < 16) {
        console.log("Inscrição Bloqueada: "+nome+" não possui idade miníma")
    } else {
        if(prossuiCupom) {
            precoFinal = precoFinal - 20;
        }
        console.log("Inscrição Confirma para "+nome+"!");
        console.log("Valor a pagar: R$"+precoFinal+"");
    }    
}

function simularVendaDeIngressos () {
    for(let i = 5; i > 0; i--) {
        console.log("Corra! Faltam apenas "+i+" vagas para o TechDay 2026");
    }
    console.log("Vagas Encerradas!");
}

form.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        console.log ("Formulário Interceptado com sucesso!")
        const valorNome = document.getElementById("nome-completo").value;
        const valorEmail = document.getElementById("email").value;

        if(valorNome.trim() === ""){
            alert("Por favor, preencha o seu nome!");
            if(localStorage.setItem()) {
                const techday_nome = document.getElementById(valorNome)
            }
        }
        if(valorEmail.trim() === ""){
            alert("Por favor, preencha o seu Email!");
        }
    }
)