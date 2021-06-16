 class Usuarios {
      
     constructor(){
         this.personas = [];
     }

     agregarPersonas(id , name){
        let persona = {id ,  name};
        this.personas.push(persona);
        return this.personas;
     }

     getpersona(name){
        let persona = this.personas.filter( person => person.name === name)[0]; // esto regresa solo la posicion asignada 
        return persona; 
    }
     
    getpersonas(){
        return this.personas;
    }

    getpersonasPorSala(){
         //TODO:Hacer la la funcion de retornas personas por salas
    }
    
    borrarPersona(id){
        let personaBorrada =  this.personas.filter( persona => persona.id === id)[0];
        this.personas = this.personas.filter( persona => persona.id != id);
        return personaBorrada;   
     }
   


 }

 module.exports = Usuarios;