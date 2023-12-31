/* Creamos el mapa y le indicamos la vista inicial */
var map = L.map('mapa').setView([43.1611, -2.5873], 9)

// Le añadimos una marca de agua
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

/* Creamos los marcadores: */
// San Sebastian
L.marker([43.34, -1.98])
    .addTo(map)
    .on("click", function () { añadir("San Sebastián") })

// Bilbao
L.marker([43.2655, -2.9354])
    .addTo(map)
    .on("click", function () { añadir("Bilbao") })

// Vitoria Gazteiz
L.marker([42.8463, -2.6738])
    .addTo(map)
    .on("click", function () { añadir("Vitoria Gasteiz") })

if (localStorage.getItem("ciudades") != undefined) {
    $(document).ready($("#iconoMinimizar").click(function () { maximizar() }))
    $("#mapa").css({ "width": "0px", "height": "0px" })
} else {
    $(document).ready($("#iconoMinimizar").click(function () { minimizar() }))
    $("#mapa").css({ "width": "90%", "height": "500px" })
}

function minimizar() {
    $("#mapa").css({ "width": "0px", "height": "0px" })
    $("#iconoMinimizar").click(function () { maximizar() })
}

function maximizar() {
    $("#mapa").css({ "width": "90%", "height": "500px" })
    $("#iconoMinimizar").click(function () { minimizar() })
}

function añadir(ciudad) {
    if (confirm(`¿Quieres ver el tiempo en ${ciudad}?`)) {
        switch (true) {
            case localStorage.getItem("ciudades") == undefined:
                localStorage.setItem("ciudades", ciudad)
                break
            case !localStorage.getItem("ciudades").includes(ciudad):
                localStorage.setItem("ciudades", `${localStorage.getItem("ciudades")};${ciudad}`)
                break
            case localStorage.getItem("ciudades").includes(ciudad):
                alert(`${ciudad} ya está registrada para mostrar`)
                break
        }
    }
}