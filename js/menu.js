document.addEventListener("DOMContentLoaded", function () {
 
    let boton = document.querySelector("#ham");
    let links = document.querySelector(".home__content-links");

    boton.addEventListener("click", ()=> {
        links.classList.toggle("d-none");
    });

});