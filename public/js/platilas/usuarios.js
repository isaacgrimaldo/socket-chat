const usuario = (usuario) => {
    return ` 
        <li class="animate__animated animate__fadeIn>
            <p>
            <h5 class="text-success"> <span class="icon-active"></span>  ${usuario.name}</h5>
            </p>
        </li>
    `
}

const msgChatGlobal = (info) => {
    return ` 
        <div class="chat-mensaje">
            <p class="chat-titulo">
              <h5>${info.name}</h5>
            </p>
            <p class="chat-cuerpo">
               ${info.msg} 
            </p>
        </div>
    `
}

export {
    usuario,
    msgChatGlobal,
}