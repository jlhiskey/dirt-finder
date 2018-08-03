'use strict';
var userList = [];
var activeUser =  [];
var userAuth = false;

// eventListener to insure user has an account

var signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', function(event){
  event.preventDefault();

  var useremail = event.target.UserEmail.value;
  var password = event.target.UserPassword.value;
  for (var idx in userList){
    if( useremail === userList[idx].userEmail && password === userList[idx].userPassword){
      activeUser = userList[idx];
      localStorage.setItem('activeuser', JSON.stringify(activeUser));

      userAuth = true;
      localStorage.setItem('userAuth', JSON.stringify(userAuth));
      window.location.assign('index.html');

      localStorage.setItem('users',JSON.stringify(userList));

    }
  }
  if (!userAuth) alert('Incorrect Username or Password');
});




