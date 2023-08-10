let animadoArr = document.querySelectorAll(".animadoArr");

function mostrarScrollArr(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoArr.length; i++) {
        let alturaAnimado = animadoArr[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animadoArr[i].style.opacity = 1;
            animadoArr[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScrollArr);