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
  console.log(useremail);
  console.log(password);
  for (var idx in userList){
    if( useremail === userList[idx].userEmail && password === userList[idx].userPassword){
      console.log('this happened.');
      activeUser = userList[idx];
      localStorage.setItem('activeuser', JSON.stringify(activeUser));
      userAuth = true;
      localStorage.setItem('userAuth', JSON.stringify(userAuth));
      window.location.assign('index.html');

    }
  }
  if (!userAuth) alert('Incorrect Username or Password');
  console.log(userList);
  console.log(userAuth);


});

// console.log(passwordCredentials[0]);
//   for(var i = 0; i < passwordCredentials[0].length; i++){
//      console.log(passwordCredentials[0][i]);
//      console.log('here');
//      if(useremail === passwordCredentials[i].userEmail && password === passwordCredentials[i].userPassword){
//        console.log('here');
//        login();
//        activeUser = userList[i]
//        localStorage.setItem('activeuser', JSON.stringify(activeUser)); */
      
//  } 
//    }

//   if (!userAuth) alert('Incorrect Username or Password');
//  });
