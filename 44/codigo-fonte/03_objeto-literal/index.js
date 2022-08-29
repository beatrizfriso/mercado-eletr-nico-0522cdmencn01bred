// Declaração de Objeto literal
let usuario = {
    id: 1,
    nome: "Willian",
    sobrenome: "Sant Anna"
}
// Declaração de uma Lista de objetos literais
let listaUsuarios = [
    {
        id: 1,
        nome: "Willian",
        sobrenome: "Sant Anna"
    },
    {
        id: 2,
        nome: "Sabrina",
        sobrenome: "Helena"
    },
    {
        id: 3,
        nome: "Ingrid",
        sobrenome: "Carol"
    }
];
// Conversão para JSON
let json = JSON.stringify(listaUsuarios);
// Objetos literais são do tipo object
console.log("Objeto Literal", typeof (listaUsuarios), listaUsuarios);
// JSON são são tratados como string
// Nota: Para realizar uma conversão de JSON para Objeto literal JSON.parse(json);
console.log("JSON", typeof (json), json);
// Objeto literal com chave: valor
console.log(usuario);
// Valores do objeto literal
console.log(usuario.id, usuario.nome, usuario.sobrenome);
// Outra opção: Valores do objeto literal
console.log(usuario['id'], usuario['nome'], usuario['sobrenome']);
// Estrutura de repetição para acessar chave e valores de um Objeto literal
for (chave in usuario) {
    // usuario['id'] 
    // usuario['nome'] 
    // usuario['sobrenome']
    console.log(chave, usuario[chave]);
}
// Array de objetos literais [{ chave: valor }];
console.log(listaUsuarios);
// Acesso aos valores de uma Array de objetos literais
console.log(listaUsuarios[0].id, listaUsuarios[0].nome, listaUsuarios[0].sobrenome);
console.log(listaUsuarios[1].id, listaUsuarios[1].nome, listaUsuarios[1].sobrenome);
console.log(listaUsuarios[2].id, listaUsuarios[2].nome, listaUsuarios[2].sobrenome);
// Acesso aos valores de uma Array de objetos literais utilizando uma estrutura de repetição
listaUsuarios.forEach(usuario => console.log(usuario.id, usuario.nome, usuario.sobrenome));