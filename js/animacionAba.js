let animadoAba = document.querySelectorAll(".animadoAba");

function mostrarScrollAba(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoAba.length; i++) {
        let alturaAnimado = animadoAba[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animadoAba[i].style.opacity = 1;
            animadoAba[i].classList.add("mostrarAbajo");
        }
    }
}

window.addEventListener('scroll', mostrarScrollAba);