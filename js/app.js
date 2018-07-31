'use strict';

// eventListener to insure user has an account
var signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', function(event){
  event.preventDefault();

  var useremail = event.target.UserEmail.value;
  var password = event.target.UserPassword.value;

  console.log(useremail);
  console.log(password);

  //   if(useremail !== localStorage){
  //     return alert('Incorrect Username or Password');
  //   }
  //   else if(password !== localStorage){
  //     return alert('Incorrect Username or Password');
  //   }
  
  //location.replace('index.html');
});