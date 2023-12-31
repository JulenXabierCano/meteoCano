function cargarCiudades() {
    // Declaración de variables necesarias
    let ciudades
    var ciudadesHTML = document.getElementById("ciudades")

    // Fetch para recuperar las ciudades disponibles
    /*
        Notas:
        --- Es probable que se envie el local storage para minimizar la carga de la conexión,
            de esta manera se podrán añadir infinitas localizaciónes
    */
    fetch("./src/js/data_sim.json")
        .then(response => response.json())
        .then(data => {
            // Rellenamos las ciudades con la respuesta
            ciudades = data.ciudades

            // Recorremos las ciudades para, en caso de estar guardadas, mostrarlas
            ciudades.forEach((ciudad) => {
                if (localStorage.getItem("ciudades").includes(ciudad.nombre)) {
                    ciudadesHTML.innerHTML += `
                        <div class='card'>
                            <b>Ciudad:</b> ${ciudad.nombre} <br><hr>
                            <b>Grados:</b> ${ciudad.grados}ºC <br><hr>
                            <b>Humedad:</b> ${ciudad.humedad}%
                        </div>`
                }
            })
        })
}