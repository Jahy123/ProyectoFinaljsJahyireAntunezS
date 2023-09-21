// Array de objetos
let notasGuardadas = []

// Captura body
let body = document.getElementById("body")

// Captura el inicio
let inicio = document.getElementById("inicio")

// Cpatura la seccion hoja para escribir
let seccionCrearNotas = document.getElementById("crearNota")

// Captura la seccion para ver las notas
let seccionVerNotas = document.getElementById("verNota")
// Captura el boton en inicio para comenzar
let inicioBotonComenzar = document.getElementById("inicio__botonComenzar")
inicioBotonComenzar.addEventListener("click", crearOVerNotas)

function crearOVerNotas() {
    ocultarNodos(inicio)
    body.innerHTML = `
    <section id="crearOVerNotas">
      <div id="crearOVerNotas__boton--regresar">
        <button id="boton__regresar">Regresar</button>
      </div>
      <div id="crearOVerNotas__boton--crearVer">
      <div id="boton__crear">
        <button id="botonCrear">Crear nota</button>
      </div>
      <div id="boton__ver">
        <button id="botonVer">Ver notas</button></div>
      </div>
    </section>
    `
    let botonRegresar = document.getElementById("boton__regresar")
    botonRegresar.addEventListener("click", mostrarInicio)
    let botonCrearNota = document.getElementById("botonCrear")
    botonCrearNota.addEventListener("click", mostrarHoja)
    let botonVerNotas = document.getElementById("botonVer")
    botonVerNotas.addEventListener("click", verNotas)
}
function mostrarInicio() {
    let seccionCrearOVerNotas = document.getElementById("crearOVerNotas")
    ocultarNodos(seccionCrearOVerNotas)
    body.innerHTML = `
    <main id="inicio">
        <h1 id="inicio__titulo">Deja de <span>procrastinar </span>y empieza a <span>crear</span>.</h1>
        <button id="inicio__botonComenzar">Comenzar</button>
    </main>
    `
    let inicioBotonComenzar = document.getElementById("inicio__botonComenzar")
    inicioBotonComenzar.addEventListener("click", crearOVerNotas)
}
function mostrarHoja() {
    let seccionCrearOVerNotas = document.getElementById("crearOVerNotas")
    document.querySelector("#crearOVerNotas")
    if (seccionCrearOVerNotas !== null) {
        ocultarNodos(seccionCrearOVerNotas)
    }
    body.innerHTML = `
    <section id="crearNota">
      <div id="creaNota__hoja"><input type="text" name="tituloNota" id="tituloNota" placeholder="Titulo">
        <textarea name="parrafoNota" id="parrafoNota" placeholder="Escribir..." cols="30" rows="10"></textarea>
      </div>
      <div id="crearNota__botones">
        <button id="crearNota__botonRegresar">Regresar</button>
        <button id="crearNota__botonGuardar">Guardar</button>
      </div>
    </section>
    `
    let botonRegresarAOpciones = document.getElementById("crearNota__botonRegresar")
    botonRegresarAOpciones.addEventListener("click", crearOVerNotas)
    let botonGuardarNota = document.getElementById("crearNota__botonGuardar")
    botonGuardarNota.addEventListener("click", guardarNotas)
}
function guardarNotas() {
    let entradaTituloNota = document.getElementById("tituloNota").value
    let entradaParrafoNota = document.getElementById("parrafoNota").value
    if (entradaTituloNota !== "" || entradaParrafoNota !== "") {
        notasGuardadas.push({id: notasGuardadas.length, titulo: entradaTituloNota, parrafo: entradaParrafoNota})
        localStorage.setItem("notas", JSON.stringify(notasGuardadas))
        crearOVerNotas()
        Swal.fire({
            title: 'Guardado',
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
    } else {
        Swal.fire({
            title: 'No ingresaste nada',
            icon: 'warning',
        })
    }
}
function verNotas() {
    let seccionCrearOVerNotas = document.getElementById("crearOVerNotas")
    ocultarNodos(seccionCrearOVerNotas)
    body.innerHTML = `
    <section id="verNota">
    </section>`
    let seccionVerNotas = document.getElementById("verNota")
    if (localStorage.getItem("notas")) {
        notasGuardadas = JSON.parse(localStorage.getItem("notas"))
        let contenidoNotas = ''
        for (const nota of notasGuardadas) {
            contenidoNotas += `
                    <div class="nota" id=${nota.id}>
                      <div class="contenido__nota">
                        <h1>${nota.titulo}</h1>
                        <p>${nota.parrafo}</p>
                      </div>
                    </div>
                `
        }
        seccionVerNotas.innerHTML = `
                <div id="verNotas--nav">
                    <button class="boton" id="boton__regresar--verNota">Regresar</button>
                    <input type="textarea" name="buscador" id="buscador" placeholder="Buscar">
                    <button class="boton" id="boton__buscar">Buscar</button>
                    <button class="boton" id="boton__filtar--A-Z">A-Z</button>
                </div>
                <div id="verNotas--contenido">
                    ${contenidoNotas}
                </div>
                <div id="verNotas--crearNuevaNota">
                    <button class="boton" id="boton__crear--verNota">Crear nota</button>
                </div>
            `
    } else {
        seccionVerNotas.innerHTML = `
                <div id="verNotas--nav">
                    <button class="boton" id="boton__regresar--verNota">Regresar</button>
                    <input type="textarea" name="buscador" id="buscador" placeholder="Buscar">
                    <button class="boton" id="boton__buscar">Buscar</button>
                    <button class="boton" id="boton__filtar--A-Z">A-Z</button>
                </div>
                <div id="verNotas--contenidonull">
                    <p>No hay nada por aquí :(</p>
                </div>
                <div id="verNotas--crearNuevaNota">
                    <button class="boton" id="boton__crear--verNota">Crear nota</button>
                </div>
            `
    }
    let crearNotaEnSecVeNotas = document.getElementById("boton__crear--verNota")
    crearNotaEnSecVeNotas.addEventListener("click", mostrarHoja)
    let regresarEnSecVeNotas = document.getElementById("boton__regresar--verNota")
    regresarEnSecVeNotas.addEventListener("click", crearOVerNotas)
    let buscarNotas = document.getElementById("buscador")
    let botonBuscarNotas = document.getElementById("boton__buscar")
    botonBuscarNotas.addEventListener("click", function() {
        buscador(notasGuardadas, buscarNotas.value)
    })
    let botonOrdenarAlfabeticamente = document.getElementById("boton__filtar--A-Z")
    botonOrdenarAlfabeticamente.addEventListener("click", function() {
        filtrarAlfabeticamente(notasGuardadas)
    })
}
function buscador(notas, valorInput) {
    valorInput = valorInput.toLowerCase()
    let notasFiltradas = notas.filter((nota) => {
        const titulo = nota.titulo.toLowerCase()
        const parrafo = nota.parrafo.toLowerCase()
        return titulo.includes(valorInput) || parrafo.includes(valorInput)
    })

    let seccionNotas = document.getElementById("verNotas--contenido");
    let contenidoNotas = ""
    for (const nota of notasFiltradas) {
        contenidoNotas += `
            <div class="nota" id=${nota.id}>
              <div class="contenido__nota">
                <h1>${nota.titulo}</h1>
                <p>${nota.parrafo}</p>
              </div>
            </div>
        `
    }
    seccionNotas.innerHTML = contenidoNotas
}
function filtrarAlfabeticamente(notas) {
    notas.sort((a, b) => {
        const tituloA = a.titulo.toLowerCase()
        const tituloB = b.titulo.toLowerCase()
        if (tituloA < tituloB) {
            return -1
        }
        if (tituloA > tituloB) {
            return 1
        }
        return 0
    })

    let seccionNotas = document.getElementById("verNotas--contenido")
    let contenidoNotas = ""
    for (const nota of notas) {
        contenidoNotas += `
            <div class="nota" id=${nota.id}>
              <div class="contenido__nota">
                <h1>${nota.titulo}</h1>
                <p>${nota.parrafo}</p>
              </div>
            </div>
        `
    }
    seccionNotas.innerHTML = contenidoNotas
}

function ocultarNodos(nodo) {
    nodo.removeAttribute("id")
    nodo.className = "ocultar"
}
function mostrarNodos(nodo, nombreID) {
    nodo.removeAttribute("class")
    nodo.id = nombreID
}