'use strict';
var userList = [];
var activeUser = [];
var allPins = [];
window.onload = function(){
  initData();
  console.log('list of users',userList );
  console.log('active users pin',activeUser.pinform);
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
    checkvar = allPins;
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
      localStorage.setItem('allpins', JSON.stringify(allPins));
      console.log('makePin happened.');
    }
  }


  //taking in information from the page, generates a pin object with necessary fields name email address avail, within the user. pushes to their pinform array.
};

//handles user authentication for have-need button
var userValidation = JSON.parse(localStorage.getItem('userAuth'));
console.log(userValidation);
var haveDirt = document.getElementById('have-need');
haveDirt.addEventListener('click', function(event){

  event.preventDefault();

  if (userValidation === true){
    window.location.assign('pinform.html');
  }
  else {
    alert('Usermust Signin');
    window.location.assign('signin.html');
  }
});

//handles logout button only on Main Page, might fix later.
var logout = document.getElementById('logout');
logout.addEventListener('click', function(event){
  event.preventDefault();

  userValidation = false;
  
  alert('You have been logged out');
});



/* activeUser.makePin('thisisatest','4204206969','bigdickincorporated','diego@diego.com','Have','11122 Meridian Ave S','420','Topsoil','69','now')
for (var idx in userList) {
  if (userList[idx].userName === activeUser.userName) {
    console.log('yes')
    userList[idx].pinform = activeUser.pinform;
  }
}
console.log(userList[0].pinform)
localStorage.setItem('users', JSON.stringify(userList));
localStorage.setItem('activeuser', JSON.stringify(activeUser)); */

var haveNeedNav = document.getElementById('have-need-b');
haveNeedNav.addEventListener('click', function(event){
  event.preventDefault();
 
  if (userValidation === true){
    window.location.assign('pinform.html');
  }
  else {
    alert('Usermust Signin');
    window.location.assign('signin.html');
  } 
});