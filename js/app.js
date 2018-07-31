'use strict';
var userList = [];

function login(){
  //changes user to being logged in, gives access to create pinform
}

function User(user,email,pass,company,phone){
  this.userName = user;
  this.userEmail = email;
  this.userPassword = pass;
  this.userCompany= company;
  this.userPhoneNumber= phone;
  this.pinform = {
    pinName:'',
    pinEmail: '',
    pinAddress: '',
    pinHaveNeed: '',
    pinQuantity: '',
    pinDirtType: '',
    pinDensity: '',
    pinAvailability: '',
  };
  userList.push(this);
}


function userAuth(){
  //if user accesses h/n buttons, checks if user is logged in. if, allows user to progress and calls pinform creator, if not, redirs user to creation
}

User.prototype.makePin = function() {
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

