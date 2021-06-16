///Referencias al HTML
const msgLog = document.querySelector('#msgLog');
const listUsuarios = document.querySelector('#listUsuarios');
const chat = document.querySelector('#chat');
const mensajes = document.querySelector('#mensajes');
const formIGSA = document.querySelector('#formIGSA');   
const alerInfo =  document.querySelector('#alerInfo');


const params = new URLSearchParams(window.location.search);
if(!params.has('name') && !params.has('sala')){

   throw new Error('El nombre del usuario es requerido');
}

var usuario = {
     name:params.get('name'),
     sala:params.get('sala'),
}

console.log(usuario);