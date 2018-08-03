'use strict';
var geocoder;
var map;
var testInfo;
var markers = [];

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


function interactGreenMarker(marker, index) {
  marker.info = new google.maps.InfoWindow({
    content: greenPins[index].pinAddress + '<br>' + greenPins[index].pinEmail + '<br>' + greenPins[index].pinName + '<br>' + greenPins[index].pinQuantity
  });
  google.maps.event.addListener(marker, 'click',function() {
    marker.info.open(map,marker);
  });
}

function interactRedMarker(marker, index) {
  marker.info = new google.maps.InfoWindow({
    content: redPins[index].pinAddress + '<br>' + redPins[index].pinEmail + '<br>' + redPins[index].pinName + '<br>' + redPins[index].pinQuantity
  });
  google.maps.event.addListener(marker, 'click', function () {
    marker.info.open(map, marker);
  });
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

/* 
function codeAddress() {
  var marker;
  for  (idx = 0; idx < allPins.length; idx++){
    console.log('address of entered thing:', allPins[idx].pinAddress);
    console.log('value of entered thing:', allPins[idx].pinHaveNeed);

    geocoder.geocode({ 'address': allPins[idx].pinAddress}, function (results, status) {
      if (status === 'OK') {
        marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          icon: 'imgs/green-pin.png'
      
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
} */


/* function newCodeAddressone(arrayofpins){
  var newCodeAddress = [];
  var newCodeAddressHN = [];
  for (var idx in arrayofpins){
    newCodeAddress.push(arrayofpins[idx].pinAddress);
    newCodeAddressHN.push(arrayofpins[idx].pinHaveNeed);
  }
  newCodeAddresstwo(newCodeAddress, newCodeAddressHN);
}

function newCodeAddresstwo(arrayofaddresses, arrayofHN){
  for (var idx = 0; idx < arrayofaddresses.length; idx++){
    geocoder.geocode({'address': arrayofaddresses[idx]}, function (results, status) {
      if (status === 'OK'){
        console.log(arrayofaddresses);
        checkHN( arrayofHN, results, idx);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}

function checkHN(arrayofHN, results,idx ){
  if (arrayofHN[idx]=== 'have'){
    console.log('make green pin ran',idx, arrayofHN[idx]);
    makeGreenPin(results);
  } else {
    console.log('make red pin ran',idx, arrayofHN[idx]);
    makeRedPin(results);
  }
}

function makeGreenPin(results){

  var marker = new google.maps.Marker({
    map: map,
    position: results[0].geometry.location,
    icon: 'imgs/green-pin.png'
  });
}

function makeRedPin(results){
  var marker = new google.maps.Marker({
    map: map,
    position: results[0].geometry.location,
    icon: 'imgs/red-pin.png'
  });
}
 */

/* 
function interactMarker(marker, index){
  var infowindow = new google.maps.InfoWindow({
    content: allPins[index].pinAddress + '<br>' + allPins[index].pinEmail + '<br>' + allPins[index].pinPhoneNumber
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
} */
// codeAddress(jim)
