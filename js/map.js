'use strict';
var geocoder;
var map;


function initMap() {
  //hardcoded seattle as a default layback
  var seattle = {
    lat: 47.6062,
    lng: -122.3321
  };
  // The map, centered at seattle
  map = new google.maps.Map(
    document.getElementById('map'), { zoom: 7, center: seattle});
}
//what this function does; inits the geocoder, to be used in codeAddress in conjunction with pinform.address
function geocode() {
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
function interactMarker(marker, arrayofpins, index){
  var infowindow = new google.maps.InfoWindow({
    content: arrayofpins[index].pinAddress + '<br>' + arrayofpins[index].pinEmail + '<br>' + arrayofpins[index].pinPhoneNumber
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}

function codeAddress(arrayofpins) {
  for (var idx in arrayofpins){
    console.log('address of entered thing:', arrayofpins[idx].pinAddress);

    geocoder.geocode({ 'address': arrayofpins[idx].pinAddress}, function (results, status) {
      if (status === 'OK') {
        if(arrayofpins[idx].pinHaveNeed === 'have'){
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: 'imgs/green-pin.png'
          });
          interactMarker(marker, arrayofpins, idx);
        } else if (arrayofpins[idx].pinHaveNeed === 'need'){
          console.log('the following console log should be need.', arrayofpins[idx].pinHaveNeed);
          
          var marker2 = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: 'imgs/red-pin.png'
          });
          interactMarker(marker2, arrayofpins, idx);
        }
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
        console.log('did the geocoder fuck up?');
      }
    });
  }
}


initMap();
geocode();





// codeAddress(jim);