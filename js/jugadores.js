// Devolver a index si no logueó

if (localStorage.getItem("logged", "true")) {
}
else {
    window.location.href = "./index.html";
}

// Cerrar sesión

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem("logged");
    window.location.href = "./index.html";
});

// Pedir datos a la API

//! Si uso JSON
let respuesta = fetch("./js/jugadores.json")
    .then(respuesta => respuesta.json())
    .then(json => {
        let jugadores = json.map(json =>
            `<div class="col-12 col-md-4 p-2 float-start">
                <div class="card">
                    <div class="img-wrapper">
                        <span id="numeroCamiseta">${json.dorsal}</span>
                        <img src="https://julioavantt.github.io/guayerd-project-images/img/${json.dorsal}.jpg" class="card-img-top" alt="${json.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${json.name}</h5>
                        <p class="card-text">Edad: ${json.edad} años</p>
                        <p class="card-text">Posición: ${json.posicion}</p>
                        <p class="card-text">Peso: ${json.statsFisico.peso} kg</p>
                        <p class="card-text">Altura: ${json.statsFisico.altura} m</p>
                        <p class="card-text">Equipo actual: ${json.equipoActual}</p>
                        <p class="card-text">Fecha de nacimiento: ${json.fechaNacimiento}</p>
                    </div>
                </div>
            </div>`
        );
        let section = document.querySelector("section");
        section.innerHTML = jugadores.join(" ");
    })
    .catch(error => console.log("Error: ", error));

//! Si uso API
// let respuesta = fetch("https://cors-anywhere.herokuapp.com/https://scaloneta-api.vercel.app/jugadores")
//     .then(respuesta => respuesta.json())
//     .then(data => {
//         let jugadores = data.map(jugadores =>
//             `<div class="col-12 col-md-4 p-2 float-start">
//                 <div class="card">
//                     <div class="img-wrapper">
//                         <span id="numeroCamiseta">${jugadores.dorsal}</span>
//                         <img src="https://julioavantt.github.io/guayerd-project-images/img/${json.dorsal}.jpg" class="card-img-top" alt="${json.name}">
//                     </div>
//                     <div class="card-body">
//                         <h5 class="card-title">${jugadores.name}</h5>
//                         <p class="card-text">Edad: ${jugadores.edad} años</p>
//                         <p class="card-text">Posición: ${jugadores.posicion}</p>
//                         <p class="card-text">Peso: ${jugadores["stats-fisico"].peso} kg</p>
//                         <p class="card-text">Altura: ${jugadores["stats-fisico"].altura} m</p>
//                         <p class="card-text">Equipo actual: ${jugadores["equipo-actual"]}</p>
//                         <p class="card-text">Fecha de nacimiento: ${jugadores["fecha-nacimiento"]}</p>
//                     </div>
//                 </div>
//             </div>`
//         );
//         let section = document.querySelector("section");
//         section.innerHTML = jugadores.join(" ");
//     })
//     .catch(error => console.log("Error: ", error));