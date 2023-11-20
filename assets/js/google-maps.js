function initMap() {
    // Latitude and Longitude for Ho Chi Minh City
    var myLatLng = { lat: 10.8231, lng: 106.6297 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ho Chi Minh City' // Title Location
    });
}