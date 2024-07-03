'use strict'

/** navbar toggle in mobile*/ 

const /**{Node element} */ $navbar = document.querySelector("[data-navbar]");

const /**{Node element} */ $navToggler = document.querySelector("[data-nav-toggler]");


$navToggler.addEventListener("click" , ()=>$navbar.classList.toggle("active"));

/**header scroll state */

const /**node element */ $header = document.querySelector("[data-header]")

window.addEventListener("scroll",e=>{

    $header.classList[window.scrollY>50 ? "add" : "remove" ]("active");

});


// add favorit btn toggle

const /**nodelist */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {

    $toggleBtn.addEventListener("click", () => {

        $toggleBtn.classList.toggle("active");
    });
});

