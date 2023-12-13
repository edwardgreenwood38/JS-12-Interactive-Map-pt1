
// get user position from browser
const position = navigator.geolocation.getCurrentPosition(success);


function success(position) {
    

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //console.log(`Lat: ${latitude}, Long: ${longitude}`);

    const map = L.map('mapView').setView([latitude, longitude], 13);


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    let marker = L.marker([latitude, longitude]).addTo(map)

    marker.bindPopup("<b>You are here</b>").openPopup();
    //marker.addTo(mapView).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()
}


//main();
