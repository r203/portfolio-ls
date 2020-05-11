 const btmMenu = document.querySelector(".hamburger-menu-link");
 const btnMenuBars = document.querySelector(".hamburger-menu-link__bars");
 const mobileMenu = document.querySelector (".mobile-menu");
 let links = document.querySelectorAll('.mobile-menu__nav .nav__link');
 
 function toggleMenu() {
    event.preventDefault();
    
    mobileMenu.classList.toggle('mobile-menu--isopen'); 
    btnMenuBars.classList.toggle('hamburger-menu-link__bars--isopen'); 
    document.querySelector('body').classList.toggle('overflow--hidden');

};

btmMenu.addEventListener("click", toggleMenu); 
mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
        toggleMenu();
    };
    
})