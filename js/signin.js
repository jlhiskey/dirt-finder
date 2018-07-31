'use strict';
var activeUser = [];
var passwordCredentials = [];
var userAuth = false;

// eventListener to insure user has an account

passwordCredentials = JSON.parse(localStorage.getItem('users'));

console.log(passwordCredentials);

var signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', function(event){
  event.preventDefault();

  var useremail = event.target.UserEmail.value;
  var password = event.target.UserPassword.value;

  console.log(useremail);
  console.log(password);


  console.log(passwordCredentials);
  for(var i = 0; i < passwordCredentials.length; i++){
    console.log('here');
    if(useremail === passwordCredentials[i].userEmail && password === passwordCredentials[i].userPassword){
      console.log('here');
      //login();
      userAuth = true;
      activeUser = passwordCredentials[i];
      window.location.assign('index.html');
      console.log(activeUser);
    }
  }

  if (!userAuth) alert('Incorrect Username or Password');
});

