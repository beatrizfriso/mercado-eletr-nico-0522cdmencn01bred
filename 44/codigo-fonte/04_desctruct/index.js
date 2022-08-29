// Declaração das Array de string
let frutas = ["banana", "maçã", "pêra", "goiaba"];
// Criando variáveis a partir dos valores da Array
let item1 = frutas[0];
let item2 = frutas[1];
let item3 = frutas[2];
let item4 = frutas[3];
// Acessando valores das variáveis criadas a partir da Array
console.log(item1, item2, item3, item4);
// Outra maneira de criar variáveis a partir de valores da Array
let [fruta1, fruta2, fruta3, fruta4] = frutas;
// Nota: Caso deseje selecionar os valores, utilize como base esse trecho de código let [fruta1, , , fruta4] = frutas;
// Acessando valores das variáveis criadas a partir da Array
console.log(fruta1, fruta2, fruta3, fruta4);


// Declaração do Objeto literal
let usuario = {
    id: 1,
    nome: "Willian",
    sobrenome: "Sant Anna"
}
// Criando variáveis a partir dos valores das chaves do Objeto literal
let novoNome = usuario.nome;
let novoSobrenome = usuario.sobrenome;
// Desconstruíndo atributos/chaves do Objeto literal
// Nota: Caso tente acessar um atributo que não exista no Objeto literal, ele é declarado como underfined
let { nome, sobrenome } = usuario;
// Acessando os valores da chave do Objeto literal
console.log("Declaração de variáveis", novoNome, nomeSobrenome);
console.log("Desctruct", nome, sobrenome);
