'use strict';
var userList = [];
var activeUser =  [];

// eventListener to insure user has an account
initData();

userList = JSON.parse(localStorage.getItem('users'));


var signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', function(event){
  event.preventDefault();

  var useremail = event.target.UserEmail.value;
  var password = event.target.UserPassword.value;
  window.location.assign('index.html');
  console.log(useremail);
  console.log(password);
  for (var idx in userList){
    if( useremail === userList[idx].userEmail && password === userList[idx].userPassword){
      activeUser = userList[idx];
    }
  }
  console.log(activeUser);
});

/* console.log(passwordCredentials[0]);
  for(var i = 0; i < passwordCredentials[0].length; i++){
    console.log(passwordCredentials[0][i]);
    console.log('here');
    if(useremail === passwordCredentials[i].userEmail && password === passwordCredentials[i].userPassword){
      console.log('here');
      //login();
      /* activeUser = userList[i]
      localStorage.setItem('activeuser', JSON.stringify(activeUser)); */
      
/*  } 
  }

  if (!userAuth) alert('Incorrect Username or Password');
});*/
