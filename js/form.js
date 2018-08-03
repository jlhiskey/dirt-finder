'use strict';


var pinFormEl = document.getElementById('new-pin-form'); // looks for the html id main-form
pinFormEl.addEventListener('submit', function(event) { //when submit is clicked run event this is below
  event.preventDefault();

  var pinName = event.target.userName.value; //name of input boxes
  var pinPhoneNumber = event.target.userPhoneNumber.value;
  var pinCompanyName = event.target.userCompanyName.value;
  var pinEmail = event.target.userEmail.value;
  var pinHaveNeed = event.target.pinHaveNeed.value;
  var pinAddress = event.target.pinAddress.value;
  var pinQuantity = event.target.pinQuantity.value;
  var pinDirtType = event.target.pinDirtType.value;
  var pinDensity = event.target.pinDensity.value;
  var pinAvaliability = event.target.pinAvaliability.value;

  if ((pinName === '') || (pinEmail === '') || (pinAddress === '')){
    alert('Pin Name, Pin Email and Address are Required Fields');
  } else { //if the user adds nec information, make a pin and add it to either greens or reds.
    activeUser.makePin(pinName, pinPhoneNumber, pinCompanyName, pinEmail, pinHaveNeed, pinAddress, pinQuantity, pinDirtType, pinDensity, pinAvaliability);
    window.location.assign('map.html');
    //where to put the input data
    for (var idx in userList){ //for loop to store the data in the correct position
      if (userList[idx].userName === activeUser.userName){
        console.log('yes')
        userList[idx].pinform = activeUser.pinform;
        localStorage.setItem('users', JSON.stringify(userList));
        localStorage.setItem('activeuser', JSON.stringify(activeUser));
      }
    }
     
  }

});
