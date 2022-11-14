let map;
let fortwayneLatLong = { lat: 41.093842, lng: -85.139236 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
      center: fortwayneLatLong,
    zoom: 11,
  });
}

window.initMap = initMap;