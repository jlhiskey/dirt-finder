'use strict';
var geocoder;
var map;
var userList;
window.onload = function() {
  initMap();
  geocode();
  addPins();

}

function initMap() {
  //hardcoded seattle as a default layback
  var seattle = {
    lat: 47.6062,
    lng: -122.3321,
  };
  // The map, centered at seattle
  map = new google.maps.Map(
    document.getElementById('map'), { zoom: 7, center: seattle});
  }
//what this function does; inits the geocoder, to be used in codeAddress in conjunction with pinform.address 
function geocode() {
  var loc  = '';
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(47.6062, -122.3321);
  var mapOptions = {
    zoom: 8,
    center: latlng,
  };
}



//what this function does is takes the address given and geocodes it into latlong to be used for inside google api.
//TODO: implement this for loop to populate the map with pins based on userdata/hardcoded locations.

/* var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function (marker, i) {
    return function () {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i)); */
function codeAddress(user) {
  //var address = document.getElementById('address').value;
  geocoder.geocode({ 'address': user.pinform.pinAddress,}, function (results, status) {
    if (status === 'OK') {
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function addPins(){
for (var idx in userList){
  codeAddress(userList[idx])
}
}


// codeAddress(jim);