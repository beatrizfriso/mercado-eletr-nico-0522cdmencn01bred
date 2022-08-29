
// Dependendo do contexto, permite acesso fora do seu contexto.
// for, if, switch...
{
    var mensagem = "Olá";

    mensagem = "Oi";
}

// Não permite acesso fora do seu contexto. 
{
    let nome = "Willian";

    nome = "Mayara";
}

// Constantes, após inicializadas não permite atualização.
const empresa = "";
// Nota: Esta instrução foi comendada pois retornaria erro.
// empresa = "novo valor";

console.log("Variáveis com var", mensagem);
console.log("Variáveis com let", nome);
console.log("Constante", empresa);