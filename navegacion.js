//Función para el menú lateral (modo responsive)
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%"
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%"
}

//Función para asignar texto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;     
}

//Función para mostrar detalles sección trabajo
function mostarDetalles(x){
    switch (x){
        case 1:
            asignarTextoElemento('texto-detalles', "TEXTO AWS");
            break;
        
        case 2:
            asignarTextoElemento('texto-detalles', "TEXTO DESARROLLO WEB");
            break;
        
        case 3:
            asignarTextoElemento('texto-detalles', "TEXTO PYHTON");
            break;
    
        case 4:
            asignarTextoElemento('texto-detalles', "TEXTO MICRONCONTROLADORES");
            break;
        
        default:
            break;
    }

    document.getElementById("detalles-trabajo").style.display = "inline"
}

function closeDetalles(){
    document.getElementById("detalles-trabajo").style.display = "none"
}