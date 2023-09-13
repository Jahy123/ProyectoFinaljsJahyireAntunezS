// Captura el boton en inicio para comenzar
let inicioBotonComenzar = document.getElementById("inicio__botonComenzar")

// Captura la secccion principal llamada "inicio"
let seccionInicio = document.getElementById("inicio")

// Captura la secccion llamada "crearOVerNotas"
let seccioncrearOVerNotas = document.getElementsByClassName("ocultar")[0]
console.log(seccioncrearOVerNotas)
// Enventos
inicioBotonComenzar.addEventListener("click", mostrarCrearOVerNota)

function mostrarCrearOVerNota() {
    alert("Hola esta funcionando la función mostrarCrearOVerNota")
    // Elimina id de la seccion inicio
    seccionInicio.removeAttribute("id")
    // Agrega la clase "ocultar"
    seccionInicio.className = "ocultar"

    // Elimina la clase ocultar de la seccion CrearOVerNota y en este punto está visible
    seccioncrearOVerNotas.classList.remove("ocultar")
    alert("La seccion mostrarOVerNota está visible")
    // Agrega la clase "ocultar"
    seccioncrearOVerNotas.className = "crearOVerNotas"
}

// Captura elemento con id "boton__regresar"
let mostrarOVerNotaBotonRegresar = document.getElementById("boton__regresar")
// Evento
mostrarOVerNotaBotonRegresar.addEventListener("click", regresarAInicio)

function regresarAInicio() {
    // Remover id y poner la clase "ocultar" al nodo crearOVerNotas
    seccioncrearOVerNotas.removeAttribute("id")
    seccioncrearOVerNotas.className ="ocultar"
     // Remover clase y poner el id "inicio" al nodo ocultar(inicio)
    seccionInicio.classList.remove("ocultar")
    seccionInicio.id = "inicio"
}

// Captura elemento con id "botonCrear"
let mostrarOVerNotaBotonCrear = document.getElementById("botonCrear")
// Evento
mostrarOVerNotaBotonCrear.addEventListener("click", mostrarCrearNota)

// Captura elemento con la clase "ocultar"
let seccionCrearNotas = document.getElementsByClassName("ocultar")[1]
console.log(seccionCrearNotas)

function mostrarCrearNota () {
    alert("Hola esta funcionando la función mostrarCrearNota")
    // Elimina la clase "ocultar" de la seccion crearNota
    seccionCrearNotas.classList.remove("ocultar")
    // Agrega el id "crearNota"
    seccionCrearNotas.id = "crearNota"

    // Elimina la clase CrearOVerNota de la seccion crearOVerNota y en este punto está invisible
    seccioncrearOVerNotas.classList.remove("crearOVerNotas")
    alert("La seccion mostrarOVerNota está invisible")
    // Agrega la clase "ocultar"
    seccioncrearOVerNotas.className = "ocultar"
}

