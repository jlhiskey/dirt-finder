'use strict';
var userList = [];
var activeUser = [];
window.onload = function(){
  initData();
  console.log('list of users',userList );
}


function initData(){
  if (localStorage.getItem('users')){
    var usedList = JSON.parse(localStorage.getItem('users'))
    for (var idx in usedList){
      new User(usedList[idx].userName, usedList[idx].userPhoneNumber, usedList[idx].pinCompanyName, usedList[idx].userEmail, usedList[idx].userPassword);
      userList[idx].pinform = usedList[idx].pinform; 
    }
    
    
  } else {
    userList = [];
  }
  if (localStorage.getItem('activeuser')){
    var activatedUser = JSON.parse(localStorage.getItem('activeuser'));
    activeUser = new User(activatedUser.userName, activatedUser.userPhoneNumber, activatedUser.userCompanyName, activatedUser.userEmail, activatedUser.userPassword);
    userList.pop();

    console.log('init data is running');
    console.log('current active users',activeUser );
    
  } else {
    activeUser= [];
  }
}





function User(userName, userPhoneNumber, userCompanyName, userEmail, userPassword) {
  this.userName = userName;
  this.userPhoneNumber = userPhoneNumber;
  this.userCompanyName = userCompanyName;
  this.userEmail = userEmail;
  this.userPassword = userPassword;
  this.pinform = [];
  
  userList.push(this);
}


function userAuthen(){
  //if user accesses h/n buttons, checks if user is logged in. if, allows user to progress and calls pinform creator, if not, redirs user to creation
}

User.prototype.makePin = function (pinName, pinPhoneNumber, pinCompanyName, pinEmail, pinHaveNeed, pinAddress, pinQuantity, pinDirtType, pinDensity, pinAvaliability) {
  
  this.pinform.pinName = pinName;
  this.pinform.pinPhoneNumber = pinPhoneNumber;
  this.pinform.pinCompanyName = pinCompanyName;
  this.pinform.pinEmail = pinEmail;
  this.pinform.pinHaveNeed = pinHaveNeed;
  this.pinform.pinAddress = pinAddress;
  this.pinform.pinQuantity = pinQuantity;
  this.pinform.pinDirtType = pinDirtType;
  this.pinform.pinDensity = pinDensity;
  this.pinform.pinAvaliability = pinAvaliability;
  

  //taking in information from the page, generates a pin object with necessary fields name email address avail, within the user. pushes to their pinform array. 
};


/* activeUser.makePin('thisisatest','4204206969','bigdickincorporated','diego@diego.com','Have','11122 Meridian Ave S','420','Topsoil','69','now')
for (var idx in userList) {
  if (userList[idx].userName === activeUser.userName) {
    console.log('yes')
    userList[idx].pinform = activeUser.pinform;
  }
}
console.log(userList[0].pinform)
localStorage.setItem('users', JSON.stringify(userList));
localStorage.setItem('activeuser', JSON.stringify(activeUser)); */