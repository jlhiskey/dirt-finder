'use strict';
var userList = [];
var activeUser = [];
var allPins = [];
var greenPins = [];
var redPins = [];
window.onload = function(){
  initData();
  console.log('list of users',userList );
  console.log('active users pin',activeUser.pinform);
  initMap();
  geocode();
  codeAddress();
};


function initData(){
  if (localStorage.getItem('users')){
    var usedList = JSON.parse(localStorage.getItem('users'));
    for (var idx in usedList){
      new User(usedList[idx].userName, usedList[idx].userPhoneNumber, usedList[idx].pinCompanyName, usedList[idx].userEmail, usedList[idx].userPassword);
      userList[idx].pinform = usedList[idx].pinform;
    }

    //SOMETHING ABOUT THIS IS FUCKY
  } else {
    userList = [];
  }
  if (localStorage.getItem('activeuser')){
    var activatedUser = JSON.parse(localStorage.getItem('activeuser'));
    activeUser = new User(activatedUser.userName, activatedUser.userPhoneNumber, activatedUser.userCompanyName, activatedUser.userEmail, activatedUser.userPassword);
    userList.pop();

    console.log('init data is running');
    console.log('current active users',activeUser );

  } else {
    activeUser= [];
  }
  if (localStorage.getItem('allpins')){
    allPins = JSON.parse(localStorage.getItem('allpins'));
    if (localStorage.getItem('greenpins')){
      greenPins = JSON.parse(localStorage.getItem('greenpins'));
    }
    if (localStorage.getItem('redpins')){
      redPins = JSON.parse(localStorage.getItem('redpins'));
    }
  }
}


function User(userName, userPhoneNumber, userCompanyName, userEmail, userPassword) {
  this.userName = userName;
  this.userPhoneNumber = userPhoneNumber;
  this.userCompanyName = userCompanyName;
  this.userEmail = userEmail;
  this.userPassword = userPassword;
  this.pinform = [];

  this.userAuth = false;
  

  userList.push(this);
}




User.prototype.makePin = function (pinName, pinPhoneNumber, pinCompanyName, pinEmail, pinHaveNeed, pinAddress, pinQuantity, pinDirtType, pinDensity, pinAvaliability) {
  var pinform = {};
  pinform.pinName = pinName;
  pinform.pinPhoneNumber = pinPhoneNumber;
  pinform.pinCompanyName = pinCompanyName;
  pinform.pinEmail = pinEmail;
  pinform.pinHaveNeed = pinHaveNeed;
  pinform.pinAddress = pinAddress;
  pinform.pinQuantity = pinQuantity;
  pinform.pinDirtType = pinDirtType;
  pinform.pinDensity = pinDensity;
  pinform.pinAvaliability = pinAvaliability;
  this.pinform.push(pinform);
  for (var idx in userList){
    if (this.userName === userList[idx].userName){
      userList[idx] = this;
      localStorage.setItem('activeuser', JSON.stringify(this));
      localStorage.setItem('users', JSON.stringify(userList));
      allPins.push(pinform);
      if (pinform.pinHaveNeed === 'have'){
        greenPins.push(pinform);
        localStorage.setItem('greenpins', JSON.stringify(greenPins));
      } else {
        redPins.push(pinform);
        localStorage.setItem('redpins', JSON.stringify(redPins));
      }
      localStorage.setItem('allpins', JSON.stringify(allPins));
      
      console.log('makePin happened.');
    }
  }


  //taking in information from the page, generates a pin object with necessary fields name email address avail, within the user. pushes to their pinform array.
};

//works but needs to be refactored if time allows
var userValidation = JSON.parse(localStorage.getItem('activeuser'));
console.log(userValidation);
var haveDirt = document.getElementByName('have-need');
haveDirt.addEventListener('click', function(event){

  event.preventDefault();
  console.log('Have Need Clicked');
  if (activeUser.userName === undefined){
    console.log('User Name Undefined');
    alert('User must sign in or create a new account.');
    window.location.assign('signin.html');
  }
  else { 
    window.location.assign('pinform.html');
  }
});

//handles logout button only on Main Page, might fix later.
var logout = document.getElementById('logout');
logout.addEventListener('click', function(event){
  event.preventDefault();

  activeUser = [];
  localStorage.removeItem('activeuser');
  
  alert('You have been logged out');
});



var userValidation = JSON.parse(localStorage.getItem('activeuser'));
console.log(userValidation);
/* var haveDirt = document.getElementById('have-needindex');
haveDirt.addEventListener('click', function(event){

  event.preventDefault();
  console.log('Have Need Clicked');
  if (activeUser.userName === undefined){
    console.log('User Name Undefined');
    alert('Usermust Signin');
    window.location.assign('signin.html');
  }
  else { 
    window.location.assign('pinform.html');
  }
}); */

//handles logout button only on Main Page, might fix later.
var logout = document.getElementById('logout');
logout.addEventListener('click', function(event){
  event.preventDefault();

  activeUser = [];
  localStorage.removeItem('activeuser');
  
  alert('You have been logged out');
});