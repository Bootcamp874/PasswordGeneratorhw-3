
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var specialC = '!@#$%^&*()<>?+='.split('');
var number = '1234567890'.split('');

function generatePassword() {
  var integerL = 0;

  while(true) {
    var lengthP = prompt('How many characters do you want in your password? Must be between 8 and 128 characters !');
    if (isNaN(lengthP)) {
     alert('Please enter a Number!');
     continue;
    }
    
     integerL = parseInt(lengthP);
     if (8 <= integerL && integerL <= 128) {
       alert('You have selected a password length of ' + lengthP );
       break;
     }

     else {
       alert('Error! You must choose a password length between 8-128 characters.')
     }
    }

var littleLetter = confirm ('Do you want your password to have lower case letters?');
var bigLetter = confirm('Do you want your password to have upper case letters?');
var character = confirm('Do you want your password to have special characters?');
var integers = confirm('Do you want your password to have numbers?');
   
}

// conditional statement to check if user does not include any types of characters.
// if lowerCase === false && upperCase === false && specialC === false && number === false ;

// if any of the user input is false or empty then you want to give an alert , you must select a character type 
// alert("Select the appropriate characters!")
//  return 
// 
// how to randomize everything 
// generate the random text



  
  















///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
