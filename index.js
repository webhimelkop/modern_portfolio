

let menu = document.querySelector("#menu");

 let     navbar = document.querySelector(".navbar");

   let   close_nav = document.querySelector("#close-menu");

console.log(navbar);

      menu.onclick = () => {
     
        navbar.classList.toggle('actives');
    
       
    }
    close_nav.onclick = () => {
     
      navbar.classList.toggle('actives');
   
  
     
  }




     