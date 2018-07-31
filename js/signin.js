'use strict';
var userList = [];
var passwordCredentials = [];
var userAuth = false;

// eventListener to insure user has an account

var getCredentials = JSON.parse(localStorage.getItem('users'));
passwordCredentials.push(getCredentials);



console.log(passwordCredentials);

var signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', function(event){
  event.preventDefault();

  var useremail = event.target.UserEmail.value;
  var password = event.target.UserPassword.value;

  console.log(useremail);
  console.log(password);


  console.log(passwordCredentials[0]);
  for(var i = 0; i < passwordCredentials[0].length; i++){
    console.log(passwordCredentials[0][i]);
    console.log('here');
    if(useremail === passwordCredentials[0][i].userEmail && password === passwordCredentials[0][i].userPassword){
      console.log('here');
      //login();
      userAuth = true;
      window.location.assign('index.html');
    }
  }

  if (!userAuth) alert('Incorrect Username or Password');
});



function User(user,email,pass,company,phone){
  this.userName = user;
  this.userEmail = email;
  this.userPassword = pass;
  this.userCompany = company;
  this.userPhoneNumber = phone;
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