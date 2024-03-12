let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
        let numerosDeUsuario = parseInt(document.getElementById("valorUsuario").value);
       
      
       if (numerosDeUsuario === numeroSecreto){
            asignarTextoElemento("p" , `acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else{
        //El usuario no acerto
        if (numerosDeUsuario > numeroSecreto){
            asignarTextoElemento ("p" , "el numero secreto es menor");
        } else {
            asignarTextoElemento ("p" , "el numero secreto es mayor ");
        }
        intentos++;

        limpiarCaja();

       }
        return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

if (listaNumerosSorteados.length == numeroMaximo){;
    asignarTextoElemento('p' , 'Ya se sortearon todos los numros posibles');

 } else {

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}


function condicionesIniciales(){
    asignarTextoElemento("h1" , "Juego del numero secreto");
    asignarTextoElemento("p" , `indica un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 
    
}
function reiniciarJuego(){
    //limpiar la caja

    limpiarCaja();

    //indicar el intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentetos
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    documento.querySelector("#reiniciar").setAttribute("disable" , "true");
}

condicionesIniciales();