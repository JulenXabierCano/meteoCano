// Creamos el mapa
var map = L.map('mapa').setView([43.1611, -2.5873], 9);

// Le añadimos una marca de agua
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Creamos los marcadores

// San Sebastian
L.marker([43.34, -1.98]).addTo(map);

// Bilbao
L.marker([43.2655, -2.9354]).addTo(map);

// Vitoria Gazteiz
L.marker([42.8463, -2.6738]).addTo(map);

$(document).ready($("#iconoMinimizar").click(function () { minimizar() }))

function minimizar() {
    $("#mapa").css({ "width": "0px", "height": "0px" })
    $("#iconoMinimizar").click(function () { maximizar() })
}

function maximizar() {
    $("#mapa").css({ "width": "90%", "height": "500px" })
    $("#iconoMinimizar").click(function () { minimizar() })
}