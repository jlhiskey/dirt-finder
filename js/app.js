'use strict';
var userList = [];
var activeUser = [];

function initData(){
  if (localStorage.getItem('users')){
    var usedList = JSON.parse(localStorage.getItem('users'))
    for (var idx in usedList){
      new User(usedList[idx].userName, usedList[idx].userPhoneNumber, usedList[idx].pinCompanyName, usedList[idx].userEmail, usedList[idx].userPassword);
      userList[idx].pinform = usedList[idx].pinform; 
    }
  } else {
    userList = [];
  }
}
initData();


function User(userName, userPhoneNumber, userCompanyName, userEmail, userPassword) {
  this.userName = userName;
  this.userPhoneNumber = userPhoneNumber;
  this.userCompanyName = userCompanyName;
  this.userEmail = userEmail;
  this.userPassword = userPassword;
  this.pinform = [];
  
  userList.push(this);
}


function userAuthen(){
  //if user accesses h/n buttons, checks if user is logged in. if, allows user to progress and calls pinform creator, if not, redirs user to creation
}

User.prototype.makePin = function (pinName, pinPhoneNumber, pinCompanyName, pinEmail, pinHaveNeed, pinAddress, pinQuantity, pinDirtType, pinDensity, pinAvaliability) {
  var i = userList.length;
  this.pinform[i].pinName = pinName;
  this.pinform[i].pinPhoneNumber = pinPhoneNumber;
  this.pinform[i].pinCompanyName = pinCompanyName;
  this.pinform[i].pinEmail = pinEmail;
  this.pinform[i].pinHaveNeed = pinHaveNeed;
  this.pinform[i].pinAddress = pinAddress;
  this.pinform[i].pinQuantity = pinQuantity;
  this.pinform[i].pinDirtType = pinDirtType;
  this.pinform[i].pinDensity = pinDensity;
  this.pinform[i].pinAvaliability = pinAvaliability;
  

  //taking in information from the page, generates a pin object with necessary fields name email address avail, within the user. pushes to their pinform array. 
};

function makeUser(){
  //taking in information from the page, generates a User and sets it to logged in. pushes it to userList array to be stored into local storage.
}

var jim = new User('JimBob420', 'JimBob420@gmail.com', 'JimmyEatWorld', 'Boeing', '420-420-6969');

jim.pinform.pinName = jim.userName;
jim.pinform.pinEmail = jim.userEmail;
jim.pinform.pinAddress = 'Placeholder Address';
jim.pinform.pinHaveNeed = 'Need';
jim.pinform.pinQuantity = '400kg';
jim.pinform.pinDirtType = 'Topsoil';
jim.pinform.pinDensity = 'unknown';
jim.pinform.pinAvailability = 'now';

