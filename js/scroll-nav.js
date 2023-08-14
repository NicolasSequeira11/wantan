window.addEventListener("scroll", function(){

    let header = document.querySelector(".menu");
    let links = document.querySelector(".home__content-links");

    header.classList.toggle("abajo", window.scrollY>0);
    links.classList.toggle("abajo-links", window.scrollY>0);
    
})