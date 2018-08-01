'use strict';



var userFormEl = document.getElementById('new-user-form'); // looks for the html id main-form
userFormEl.addEventListener('submit', function(event) { //when submit is clicked run event this is below
  event.preventDefault();

  var userName = event.target.userName.value; //name of input boxes
  var userPhoneNumber = event.target.userPhoneNumber.value;
  var userCompanyName = event.target.userCompanyName.value;
  var userEmail = event.target.userEmail.value;
  var userPassword = event.target.userPassword.value;
  
  if ((userName === '') || (userEmail === '') || (userPassword === ''))  {
    alert('User Name, User Email and User Password are Required Fields');
  } else {
    new User(userName, userPhoneNumber, userCompanyName, userEmail, userPassword); //where to put the input data
    

  }
  console.log('user form submit button');
  localStorage.setItem('users' ,JSON.stringify(userList));
  window.location.assign('signin.html');
});
