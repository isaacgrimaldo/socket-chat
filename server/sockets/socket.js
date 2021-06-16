const { io  } = require('../server');
const Usuarios  =  require('../classes/Usuario');

const usuarios = new Usuarios();

io.on('connection', (client) => {
    
    client.on('entrar-chat',(data , callback) => {
            if(!data.name){
               return callback({
                    error:true,
                    msg:'No se ingreso ingun usuario',
                }) 
            }    
                usuarios.agregarPersonas(client.id , data.name);
                let perosnasConnectadas =  usuarios.getpersonas();
                client.broadcast.emit('lsita-usuarios', {
                    usuario:'Servidor', 
                    personas:  perosnasConnectadas,
                    newUser: `Se conecto ${data.name}`,
                });
                
                 callback(perosnasConnectadas);
    });


    client.on('disconnect',() => {
          let perosnasConnectada = usuarios.borrarPersona(client.id);
            
           client.broadcast.emit('usuario-desconectado', {
               usuario:'Servidor', 
               msg:'Se desconecto ' + perosnasConnectada.name,
            });
             
            let perosnasConnectadas =  usuarios.getpersonas();
            client.broadcast.emit('lsita-usuarios', {
                usuario:'Servidor', 
                personas:  perosnasConnectadas
            });
    })

    client.on('enviar-mensaje',(data, callback) =>{
         const {name , mensaje} = data;
         
        let payload = {
              name: name,
              msg: mensaje
          }  
         
         let payload2 ={
             name: 'Tu',
             msg: mensaje
          }

          client.emit('chat-globla',payload2); 
          client.broadcast.emit('chat-globla',payload);
    });


    client.on('enviar-mensaje-privado', (data) => {
             const {username:enviar , name , mensaje} = data;
             const destino =  usuarios.getpersona(enviar);
              if(!destino){
                client.emit('mensaje-privado-error',{msg:'Usuario no encontrado',err:true});     
              }else{
                  client.broadcast.to(destino.id).emit('mensaje-privado',{mensaje, name});
              }
    });

});