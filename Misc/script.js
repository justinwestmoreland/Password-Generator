// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericalCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialCharacters = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]

console.log(lowerCaseLetters.length);

// create function called generatePassword Inside this function I have loop through the 4 arrays of charactersets

// create a function that gets the password requirements

    // code alerts to prompt for password requirements etc. 
    // Save responses from prompts as variables and pass through generatePassword fuction as arguement 

// capture user input data!

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt ("Select Length of Password between 8 and 128 characters");
  //  create a prompt that asks user to select between 8 and 128 characters
    if (!passwordLength) {
    return;
  }
  else if (null){
    return;
  }
  else if (passwordLength <8 || passwordLength >128) {
    return;
  }

  console.log(passwordLength);
 
  // prompt to choose lowercase Y or N
  var lowerCaseLetters = window.confirm ("Use Lower Case Letters? OK = Yes or Cancel = No");
  // uppercase Y or N
  var upperCaseLetters = window.confirm ("Use Upper Case Letters? OK = Yes or Cancel = No");
  // numeric Y or N
  var numericalCharacters = window.confirm ("Use Numbers? OK = Yes or Cancel = No");
  // special characters Y or N
  var specialCharacters = window.confirm ("Use Special Characters? OK = Yes or Cancel = No");
  // if no character types are selected, end function 
  if (lowerCaseLetters === false && upperCaseLetters === false && numericalCharacters === false && specialCharacters === false) {
    return;
  }
  if (lowerCaseLetters === true) {
    console.log("I'm going to use Lowercase Letters");
    //pull random number of lowercase letters
  }
  if (upperCaseLetters === true){
    console.log("I'm going to use uppercase letters");
    //pull random number of uppercase letters
  }
 if (numericalCharacters === true) {
    console.log("I'm going to use Numbers");
    //pull random numners of numerical characters
  }
  if (specialCharacters === true) {
    console.log("I'm going to use special characters");
    //pull random number of special characters
  }

  //greate a function called generatePassword
  // var generatePassword = function () {
  //   for (var i=0, i < passwordLength.length; i++)
  //  }
 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

for (var i = 0; i < 50; i++){
  var practice = Math.floor(Math.random() * 50);
  console.log("practice", practice);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
