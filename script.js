let map;
let fortwayneLatLong = { lat: 41.093842, lng: -85.139236 };
let ohFiveScoopShop = { lat: 41.1265868, lng: -85.1223213 }; 

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: fortwayneLatLong,
        zoom: 11,
        mapId: "45cf3ebca9440228",
    });

    const marker = new google.maps.Marker({
        position: ohFiveScoopShop,
        label: "oh Five Scoop Shop",
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        map: map,
    });

}

function addMarkerToFortWayne() {
    const marker = new google.maps.Marker({
        position: ohFiveScoopShop,
        label: "oh Five Scoop Shop",
        map: map,
    });
}

