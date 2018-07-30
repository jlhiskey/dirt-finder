function initMap() {
  //hardcoded seattle as a default layback
    var seattle = {
      lat: 47.6062, 
      lng: -122.3321
  };
  // The map, centered at seattle
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 7, center: seattle});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: seattle, map: map });
}