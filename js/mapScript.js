
let map = L.map('leafMap').setView([51.1526110060676, 4.153773203483024], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let gojomarker = L.icon({
    iconUrl: './images/gojo-marker.webp',

    iconSize:     [50, 50], 
    iconAnchor:   [0, 20], 
});

L.marker([51.1526110060676, 4.153773203483024], {icon: gojomarker}).addTo(map);