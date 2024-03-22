// Programa: Ordenação Decrescente
// Nome: [Seu Nome]
// Número: [Seu Número]
// Turma: [Sua Turma]

// DESCRIÇÃO: Este programa recebe 3 números do usuário e os mostra em ordem decrescente.

// Função principal do programa
function main() {
    // Recebendo os números do usuário
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    // Ordenando os números em ordem decrescente
    let numeros = [numero1, numero2, numero3];
    numeros.sort(function(a, b) {
        return b - a;
    });

    // Mostrando os números em ordem decrescente
    console.log("Números em ordem decrescente:");
    for (let numero of numeros) {
        console.log(numero);
    }
}

// Chamando a função principal para executar o programa
main();
