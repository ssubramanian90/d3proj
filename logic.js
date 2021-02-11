 // Create the tile layer that will be the background of our map
 var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightmap
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "City": City
  };

  // Create the map object with options
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [lightmap, City]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);


function createMarkers(data) {
  console.log(data[0]);


  // Initialize an array to hold bike markers
  var cityMarkers = [];

  // Loop through the stations array
  for (var index = 0; index <data.length; index++) {
    var City = data[index];
    console.log(City);

    // For each station, create a marker and bind a popup with the station's name
    var citysMarker = L.marker([City.latitude, City.longitude])
      .bindPopup("<h3>" + City.id + "<h3><h3>Capacity: " + City.accuracy + "</h3>");

    // Add the marker to the breweriesMarkers array
        cityMarkers.push(cityiesMarker);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(cityMarkers));
}


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
d3.csv("Class_survey.csv", function(data){
    createMarkers (data);
});
