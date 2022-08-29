
// Selecionar elemento
let titulo = document.getElementById("titulo");
// Manipulando texto do elemento
titulo.innerText = "Hello World";
// Manipulando estilos do elemento
titulo.style.fontFamily = "Arial";
// Adicionando uma classe ao elemento
titulo.classList.add('titulo');
// Adicionando/Removendo classe do elemento
function manipularElemento() {
    titulo.classList.toggle('titulo');
}
// Capturando evento do click no elemento
titulo.addEventListener('click', manipularElemento);