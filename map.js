
// get user position from browser
const position = navigator.geolocation.getCurrentPosition(success);


function success(position) {
    

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //console.log(`Lat: ${latitude}, Long: ${longitude}`);

    const map = L.map('mapView').setView([latitude, longitude], 11);


    // let map = L.map('map', {
    //     center: [latitude, longitude],
    //     zoom: 10
    // });


    let main = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    let marker = L.marker([latitude, longitude]).addTo(map)
    marker.bindPopup("<b>You are here</b>").openPopup();



    // let searchLayer = L.layerGroup().addTo(map);
    // //... adding data in searchLayer ...
    // map.addControl( new L.Control.Search({layer: searchLayer}) );
    // //searchLayer is a L.LayerGroup contains searched markers
}


function getSelected() {
    const item = document.getElementById("business").value;
    //console.log(item);

    // var poiLayers = L.geoJSON(restaurant, {
    //     onEachFeature: function(feature, layer) {
    //       layer.bindPopup(feature.properties.amenity + '<br><b>' + feature.properties.item + '</b>');
    //     }
    //   });
      
    //   L.control.search({
    //       layer: poiLayers,
    //       initial: false,
    //       propertyName: item // Specify which property is searched into.
    //     })
    //     .addTo(map);
}

//main();
