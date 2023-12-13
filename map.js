
// get user position from browser
const position = navigator.geolocation.getCurrentPosition(success);


function success(position) {
    

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //console.log(`Lat: ${latitude}, Long: ${longitude}`);

    const map = L.map('mapView').setView([latitude, longitude], 13);

    // const myMap = L.map('map', {
    //     center: [48.868672, 2.342130],
    //     zoom: 12,
    // });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}


//main();
