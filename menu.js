document.addEventListener("DOMContentLoaded", function() {
    let menuBtn = document.getElementById('show-menu');
    const menu = document.querySelector("section.menu");
    menuBtn.addEventListener('click',showMenu);
    document.querySelector("#close-menu").addEventListener('click',closeMenu);

    function showMenu() {
        menu.style.height = '100%';
    }

    function closeMenu() {
        menu.style.height = '0';
    }

    function addClickToMenuItems(){
        // create Array of menu Items
        const menuItems = document.querySelectorAll('section.menu nav ul >li > a');
        // Loop through and add event listener
        for (let menuItem of menuItems) {
            menuItem.addEventListener("click", closeMenu)
        }
    }

    addClickToMenuItems();

});