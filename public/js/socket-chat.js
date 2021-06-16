import {usuario as userPA , msgChatGlobal} from './platilas/usuarios.js'

///Referencias al HTML
const msgLog = document.querySelector('#msgLog');
const listUsuarios = document.querySelector('#listUsuarios');
const chat = document.querySelector('#chat');
const mensajes = document.querySelector('#mensajes');
const formIGSA = document.querySelector('#formIGSA');   
const alerInfo =  document.querySelector('#alerInfo');


var socket = io();

const params = new URLSearchParams(window.location.search);
if(!params.has('name')){
    window.location = 'index.html';
   throw new Error('El nombre del usuario es requerido');
}

var usuario = {
     name:params.get('name'),
}


socket.on('connect', function() {
    socket.emit('entrar-chat', usuario, function(usuarios){
            const lista = usuarios.map( user => userPA(user));
             listUsuarios.innerHTML = lista.join(' ');
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});



// Escuchar información
socket.on('lsita-usuarios', function(usuarios) {
   const {personas} =  usuarios;
   const lista = personas.map(user => userPA(user));
   listUsuarios.innerHTML = lista.join(' ');
   MostraInformacion(usuarios.newUser);
});

// Escuchar información
socket.on('usuario-desconectado', function(info) {
     MostraInformacion(info.msg);     
 });

socket.on('chat-globla',(data) =>{
    const mensajes = msgChatGlobal(data);
    console.log(mensajes);
    chat.innerHTML += mensajes;
})


socket.on('mensaje-privado',(data) => {
    console.log(data);
})

socket.on('mensaje-privado-error',(data) => {
    console.log(data);
})

/**ENCIO DE MENSAJES*/
 mensajes.onsubmit = (e) => {
    let form = e.target.elements 
    e.preventDefault(); 

     let newMensaje = {name: usuario.name}
     for (let iterator of form) {
            newMensaje  = {
                ...newMensaje,
                [iterator.name] : iterator.value
            }  
     }

     if(!newMensaje.mensaje){
         Swal.fire('Falta de datos','Envie no se puede enviar un mensaje vacio','error');
         return ;   
     }

     if(newMensaje.username){
        socket.emit('enviar-mensaje-privado',newMensaje);
        mensajes.reset();
        return;
     }  

     socket.emit('enviar-mensaje',newMensaje);
     mensajes.reset();
}



 /** Programcion de mostar informacion */
function MostraInformacion(info){
     alerInfo.innerHTML = info;   
     alerInfo.style.animation = "mostar 3s";
     alerInfo.style.display = "block";    
     setTimeout(() =>{
        alerInfo.style.animation = "ocultar 3s"
          setTimeout(() =>{
              console.log('final')
              alerInfo.style.display='none';
           },3020)
     },3000)

}