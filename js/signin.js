'use strict';
var userList = [];
// eventListener to insure user has an account
var signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', function(event){
  event.preventDefault();

  var useremail = event.target.UserEmail.value;
  var password = event.target.UserPassword.value;

  console.log(useremail);
  console.log(password);

  if(useremail === jim.userEmail && password === jim.userPassword){
    //login();
    window.location.assign('index.html');
    var authentication = true;
  }
  else return alert('Incorrect Username or Password');
});



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


var jim = new User('JimBob420', 'JimBob420@gmail.com', 'JimmyEatWorld', 'Boeing', '420-420-6969');