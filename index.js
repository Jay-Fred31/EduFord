
const closeMenu = document.querySelector(".fa-xmark");
const openMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-links");

openMenu.addEventListener('click', () => {
    menu.style.transition = "2s";
    menu.classList.add('open');
    
   
})


closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    menu.style.transition = "2s";
})