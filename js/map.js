'use strict';
var geocoder;
var map;
var testInfo;
var markers = [];
//creates map within the div with id 'map'. google api stuff, very complicated, read the docs if you want.
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
//the moneymaker function. takes green pin addresses, puts them on the map and makes them interactable with info windows.
function codeAddress(){
  for (var idx in greenPins){
    (function() {
      geocoder.geocode({ 'address': greenPins[idx].pinAddress }, function (results, status) {
        if (status === 'OK') {
          let marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: 'imgs/green-pin.png'
          });
          interactGreenMarker(marker, idx);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    })();
  }
  codeAddressRed();
}

// ok so idk what's fucky here but it is a Closure Issue.




//see codeAddress() for this functionality, except with red pins.
function codeAddressRed(){
  for (var idx in redPins) {
    geocoder.geocode({ 'address': redPins[idx].pinAddress }, function (results, status) {
      if (status === 'OK') {
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          icon: 'imgs/red-pin.png'
        });
        interactRedMarker(marker,idx);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}

// gives each green marker an info window with relevant information.
function interactGreenMarker(marker, index) {
  marker.info = new google.maps.InfoWindow({
    content: greenPins[index].pinAddress + '<br>' + greenPins[index].pinEmail + '<br>' + greenPins[index].pinName + '<br>' + greenPins[index].pinQuantity
  });
  google.maps.event.addListener(marker, 'click',function() {
    marker.info.open(map,marker);
  });
}
//gives each red marker an info window with relevant information.
function interactRedMarker(marker, index) {
  marker.info = new google.maps.InfoWindow({
    content: redPins[index].pinAddress + '<br>' + redPins[index].pinEmail + '<br>' + redPins[index].pinName + '<br>' + redPins[index].pinQuantity
  });
  google.maps.event.addListener(marker, 'click', function () {
    marker.info.open(map, marker);
  });
}





