
// Declaração de um função no JavaScript
function emitirMensagem(mensagem) {
    return mensagem;
}
emitirMensagem("Olá");
// Declaração de uma função anônima em um variável
let buscarPeloNome = function (nome) {
    return nome;
}
buscarPeloNome("Willian");
// Declaração de uma Arrow Function
let buscarPeloSobrenome = sobrenome => sobrenome;
buscarPeloSobrenome("Sant Sant Anna");
// Propriedade arguments
function calcularValores() {
    const { valor1, valor2 } = arguments;

    return valor1 + valor2;
}

calcularValores(1, 2);