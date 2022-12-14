// Devolver a index si no logueó

if (localStorage.getItem("logged", "true")) {
}
else {
    window.location.href = "./index.html";
}

// Mapa

let center = [25.2807, 51.5217];

let map = L.map("map").setView(center, 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let icon = L.icon({
    iconUrl: "https://img.icons8.com/fluency/512/map-pin.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
});

let marker = L.marker(center, { icon: icon }).addTo(map);

marker.bindPopup("<b>Estamos en Qatar :)</b>").openPopup();

// Jugadores

const objetoMapa = [
    {
        jugador: "Qatar 2022",
        coordenada: [25.2841478, 51.4419568],
        ciudad: "World Cup",
    },
    {
        jugador: "Franco Armani",
        coordenada: [-33.044167, -61.168056],
        ciudad: "Casilda",
    },
    {
        jugador: "Gerónimo Rulli",
        coordenada: [-34.933333, -57.95],
        ciudad: "La Plata",
    },
    {
        jugador: "Emiliano Martínez",
        coordenada: [-38.0174106, -57.6705734],
        ciudad: "Mar del Plata",
    },
    {
        jugador: "Juan Foyth",
        coordenada: [-34.933333, -57.95],
        ciudad: "La Plata",
    },
    {
        jugador: "Nicolás Tagliafico",
        coordenada: [-34.783333, -58.366667],
        ciudad: "Rafael Calzada",
    },
    {
        jugador: "Gonzalo Montiel",
        coordenada: [-34.770833, -58.646389],
        ciudad: "González Catán",
    },
    {
        jugador: "Germán Pezzella",
        coordenada: [-38.716667, -62.266667],
        ciudad: "Bahía Blanca",
    },
    {
        jugador: "Cristian Romero",
        coordenada: [-31.416667, -64.183333],
        ciudad: "Córdoba",
    },
    {
        jugador: "Nicolás Otamendi",
        coordenada: [-34.4718607, -58.6715832],
        ciudad: "El Talar",
    },
    {
        jugador: "Lisandro Martínez",
        coordenada: [-33.15, -59.316667],
        ciudad: "Gualeguay",
    },
    {
        jugador: "Nahuel Molina",
        coordenada: [-32.183333, -64.416667],
        ciudad: "Embalse",
    },
    {
        jugador: "Leandro Paredes",
        coordenada: [-34.683333, -58.55],
        ciudad: "San Justo",
    },
    {
        jugador: "Rodrigo de Paul",
        coordenada: [-34.683333, -58.333333],
        ciudad: "Sarandí",
    },
    {
        jugador: "Marcos Acuña",
        coordenada: [-38.902778, -70.065],
        ciudad: "Zapala",
    },
    {
        jugador: "Exequiel Palacios",
        coordenada: [-27.05, -65.4],
        ciudad: "Famaillá",
    },
    {
        jugador: "Thiago Almada",
        coordenada: [-34.633333, -58.533333],
        ciudad: "Ciudadela",
    },
    {
        jugador: "Alejandro Gómez",
        coordenada: [-34.599722, -58.381944],
        ciudad: "Ciudad Autónoma de Buenos Aires",
    },
    {
        jugador: "Guido Rodríguez",
        coordenada: [-34.6, -58.516667],
        ciudad: "Sáenz Peña",
    },
    {
        jugador: "Alexis Mac Allister",
        coordenada: [-36.620278, -64.290556],
        ciudad: "Santa Rosa",
    },
    {
        jugador: "Enzo Fernández",
        coordenada: [-34.566667, -58.533333],
        ciudad: "San Martín",
    },
    {
        jugador: "Julián Álvarez",
        coordenada: [-31.6679028, -63.2032357],
        ciudad: "Calchín",
    },
    {
        jugador: "Lionel Messi",
        coordenada: [-32.9520457, -60.766679],
        ciudad: "Rosario",
    },
    {
        jugador: "Ángel Di María",
        coordenada: [-32.9520457, -60.766679],
        ciudad: "Rosario",
    },
    {
        jugador: "Ángel Correa",
        coordenada: [-32.9520457, -60.766679],
        ciudad: "Rosario",
    },
    {
        jugador: "Paulo Dybala",
        coordenada: [-31.776389, -63.801111],
        ciudad: "Laguna Larga",
    },
    {
        jugador: "Lautaro Martínez",
        coordenada: [-38.716667, -62.266667],
        ciudad: "Bahía Blanca",
    },
    {
        jugador: "Lionel Scaloni",
        coordenada: [-33.0169, -61.0431],
        ciudad: "Pujato",
    },
    ,];

let select = document.querySelector("select");

let arrayJugadores = objetoMapa.map(({ jugador }) => `<option>${jugador}</option>`).toString().replace(",", " ");

select.innerHTML += arrayJugadores

function changeMap() {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { icon }).addTo(map);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}

// Cerrar sesión

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem("logged");
    window.location.href = "./index.html";
});
