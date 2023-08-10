let animadoDer = document.querySelectorAll(".animadoDer");

function mostrarScrollDer(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoDer.length; i++) {
        let alturaAnimado = animadoDer[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animadoDer[i].style.opacity = 1;
            animadoDer[i].classList.add("mostrarDerecha");
        }
    }
}

window.addEventListener('scroll', mostrarScrollDer);