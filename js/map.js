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

const objetoMapa = [
    {
        jugador: "Qatar 2022",
        coordenada: [25.2841478, 51.4419568],
        ciudad: "World Cup",
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
        jugador: "Nicolás Otamendi",
        coordenada: [-34.4718607, -58.6715832],
        ciudad: "El Talar",
    },
    {
        jugador: "Julián Álvarez",
        coordenada: [-31.6679028, -63.2032357],
        ciudad: "Calchín",
    },
    {
        jugador: "Emiliano Martínez",
        coordenada: [-38.0174106, -57.6705734],
        ciudad: "Mar del Plata",
    }
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