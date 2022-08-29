// Declaração de uma array
let frutas = ["banana", "maçã", "pêra", "goiaba"];
// Tamanho da minha Array
frutas.length;
// Acessar pelo índice
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
// Remover o último
frutas.pop();
// Remover o primeiro
frutas.shift();
// Adicionar um valor no início
frutas.unshift("côco");
// Adicionar um novo valor no final
frutas.push("morango");
// Criando uma Array a partir dos valores da variável frutas.
let minhaSacola = [...frutas, "leita", "feijão"];
// Acessar todos os valores da Array
console.log(frutas);
console.log(minhaSacola);
// Acessando os valores da Array com uma estrutura de repetição
frutas.forEach((fruta, indice) => console.log(fruta, indice));