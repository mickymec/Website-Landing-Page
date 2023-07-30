// -------------------------------------
// ACCESS HTML ELEMENT
// -------------------------------------
const navbar = document.querySelector('.navbar');
const navToggler = document.querySelectorAll('.toggle-btn');

// NAVBAR
for (let i = 0; i < navToggler.length; i++) {
    
    navToggler[i].addEventListener("click", ()=> {

        navbar.classList.toggle('active');
        
    })
    
}