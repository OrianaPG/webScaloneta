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

let respuesta = fetch("https://cors-anywhere.herokuapp.com/https://scaloneta-api.vercel.app/jugadores")
    .then(respuesta => respuesta.json())
    .then(data => {
        let jugadores = data;
    })
    .catch(error => console.log("Error: ", error));
