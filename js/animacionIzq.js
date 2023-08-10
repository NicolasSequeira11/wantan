let animadoIzq = document.querySelectorAll(".animadoIzq");

function mostrarScrollIzq(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoIzq.length; i++) {
        let alturaAnimado = animadoIzq[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animadoIzq[i].style.opacity = 1;
            animadoIzq[i].classList.add("mostrarIzquierda");
        }
    }
}

window.addEventListener('scroll', mostrarScrollIzq);