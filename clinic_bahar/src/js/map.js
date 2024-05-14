
var map = L.map('map').setView([40.895033485974565, 29.184422146974466], 15); 

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the clinic
L.marker([40.895033485974565, 29.184422146974466]).addTo(map)
    .bindPopup('Kliniğimizin konumu')
    .openPopup();