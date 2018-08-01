'use strict';
var userList = [];
var activeUser = [];

function initData(){
  if (localStorage.getItem('users') && localStorage.getItem('activeuser')){
    var usedList = JSON.parse(localStorage.getItem('users'))
    for (var idx in usedList){
      new User(usedList[idx].userName, usedList[idx].userPhoneNumber, usedList[idx].pinCompanyName, usedList[idx].userEmail, usedList[idx].userPassword);
      userList[idx].pinform = usedList[idx].pinform; 
    }
    var activatedUser = JSON.parse(localStorage.getItem('activeuser'));
    activeUser = new User(activatedUser.userName, activatedUser.userPhoneNumber, activatedUser.pinCompanyName, activatedUser.userEmail,activatedUser.userPassword);
    //userList.pop();
    
    console.log('init data is running');
    
    
  } else {
    userList = [];
  }

}
initData();




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


