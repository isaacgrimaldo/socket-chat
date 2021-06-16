//Referencias al html
const form = document.querySelector('form');


window.onload = () => {
   
     form.onsubmit = (e) => {
          const datos = e.target.elements;
          e.preventDefault();
          let info = {}
          for (const iterator of datos) {
                info = {
                     ...info,
                     [iterator.name]: iterator.value
                }
          } 
          
          if(!info.user && !info.sala ){
               throw new Error('Ingrese un nombre');
          }
          
          if(info.user && !info.sala){
               window.location =`http://localhost:3000/chat.html?name=${info.user}`;
          }

          if(info.user && info.sala){
               window.location =`http://localhost:3000/chatSala.html?name=${info.user}&sala=${info.sala}`;
          }
     } 

}