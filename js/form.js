'use strict';


/* MOVE TO NEW JS FILE
var userFormEl = document.getElementById('new-user-form'); // looks for the html id main-form
userFormEl.addEventListener('submit', function(event) { //when submit is clicked run event this is below
  event.preventDefault();

  var userName = event.target.userName.value; //name of input boxes
  var userPhoneNumber = event.target.userPhoneNumber.value;
  var userCompanyName = event.target.userCompanyName.value;
  var userEmail = event.target.userEmail.value;
  var userPassword = event.target.userPassword.value;
  
  if ((userName === '') || (userEmail === '') || (userPassword === ''))  {
    alert('User Name, User Email and User Password are Required Fields');
  } else {
    new User(userName, userPhoneNumber, userCompanyName, userEmail, userPassword); //where to put the input data
    window.location.assign('signin.html');

  }
  console.log('user form submit button');
  localStorage.setItem('users' ,JSON.stringify(userList));
}); */

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
  
  if ((pinName === '') || (pinEmail === '') || (pinAddress === ''))  {
    alert('Pin Name, Pin Email and Address are Required Fields');
  } else {
    activeUser.makePin(pinName, pinPhoneNumber, pinCompanyName, pinEmail, pinHaveNeed, pinAddress, pinQuantity, pinDirtType, pinDensity, pinAvaliability);

     //where to put the input data
     for (var idx in userList){
       if (userList[idx].userName === activeUser.userName){
         console.log('yes')
         userList[idx].pinform = activeUser.pinform;
         localStorage.setItem('users', JSON.stringify(userList));
         localStorage.setItem('activeuser', JSON.stringify(activeUser));
       }
     }

    
  }
  
  console.log('pin form submit button');
  
  //window.location.assign('map.html');

});