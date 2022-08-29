

// Requerer alguma informação do servidor
// A comunicação será realizada com protocolo HTTP
// A comunicação utilizada o método GET
// Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
/*

// Opção 1:

requererTodo();

function requererTodo() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((respostaServidor) => respostaServidor.json())
        .then((respostaJSON) => apresentarEmTela(respostaJSON));
}
*/

// Opção 2:

requererTodo();

// Documentação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function requererTodo() {

    let respostaServidor = await fetch('https://jsonplaceholder.typicode.com/posts/');

    let respostaJSON = await respostaServidor.json();

    apresentarEmTela(respostaJSON);
}


function apresentarEmTela(itens) {
    itens.map(item => lista.innerHTML += `
        <li>${item.title}</li>
    `);
}
