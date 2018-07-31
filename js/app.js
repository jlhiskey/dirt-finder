'use strict';
var userList = [];
/* // eventListener to insure user has an account
var signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', function(event){
  event.preventDefault();

  var useremail = event.target.UserEmail.value;
  var password = event.target.UserPassword.value;

  console.log(useremail);
  console.log(password);

//   if(useremail === localStorage){
//     return alert('Incorrect Username or Password');
//   }
//   else if(password === localStorage){
//     return alert('Incorrect Username or Password');
//   }
}); */
function login(){
  //changes user to being logged in, gives access to create pinform
}

function User(userName,userPhoneNumber,userCompanyName,userEmail,userPassword){
  this.userName = userName;
  this.userPhoneNumber = userPhoneNumber;
  this.userCompanyName = userCompanyName;
  this.userEmail = userEmail;
  this.userPassword = userPassword;
  this.pinform = function Pin(pinName,pinPhoneNumber,pinCompanyName,pinEmail,pinHaveNeed,pinAddress,pinQuantity,pinDirtType,pinDensity, pinAvaliability){
    this.pinName = pinName;
    this.pinPhoneNumber = pinPhoneNumber;
    this.pinCompanyName = pinCompanyName;
    this.pinEmail = pinEmail;
    this.pinHaveNeed = pinHaveNeed;
    this.pinAddress = pinAddress;
    this.pinQuantity = pinQuantity;
    this.pinDirtType = pinDirtType;
    this.pinDensity = pinDensity;
    this.pinAvaliability = pinAvaliability;
  };
  userList.push(this);
}

  


function userAuth(){
  //if user accesses h/n buttons, checks if user is logged in. if, allows user to progress and calls pinform creator, if not, redirs user to creation
}

User.prototype.makePin = function() {
  //taking in information from the page, generates a pin object with necessary fields name email address avail, within the user. pushes to their pinform array. 
}

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
