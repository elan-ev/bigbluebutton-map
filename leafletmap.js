window.onload = function () {
    console.log("Script is running")
    var basemap = L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        noWrap: false
	});

    $.getJSON("adopters.geojson", function(data) {

      function onEachFeature(feature, layer) {

          layer.bindPopup("Institution: " + feature.properties.institution);
      }
      var geojson = L.geoJson(data, {
        onEachFeature: onEachFeature
      });

    var map = L.map('my-map',{
      minZoom: 2
    })
    .fitBounds(geojson.getBounds());

    basemap.addTo(map);
    geojson.addTo(map);
    });
};
