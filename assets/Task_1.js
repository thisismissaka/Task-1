// script.js

//JS USED FOR BLUR

document.addEventListener('DOMContentLoaded', () => {
    const MegaMenuItems = document.querySelectorAll('.nav-item.MegaMenuLinks');  //QUERYSELECTORALL FOR EVERY NAV-ITEM
    const mainContent = document.getElementById('main-content');
    const navbar = document.querySelector('.navbar'); 

    MegaMenuItems.forEach(MegaMenuItem => {                              //FOREACH FOR EVERY NAV-ITEM
        MegaMenuItem.addEventListener('mouseover', () => {
            mainContent.classList.add('blur-effect');
            navbar.classList.add('background-change');
        });

        MegaMenuItem.addEventListener('mouseout', () => {
            mainContent.classList.remove('blur-effect');
            navbar.classList.remove('background-change');
        });
    });
});




