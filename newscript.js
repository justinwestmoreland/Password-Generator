// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specials = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"];
var oneArray = [];

// Write password to the #password input
function writePassword() {
  // prompt user for a password length, do things if it's outside 8 and 128
  var passwordLength = window.prompt("Select Length of Password between 8 and 128 characters");
  if (passwordLength === null) {
    return;
  }
  if (!passwordLength) {
    alert("Please select a value between 8 and 128");
    return writePassword();
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
  alert("Now you'll chooose which characters you'll want to use.")    
  }
  if (passwordLength < 8 || passwordLength > 128) {
      alert("Please select a value between 8 and 128");
      return writePassword();
  }
  // prompt to choose lowercase Y or N
  var lowerCaseChoice = window.confirm("Use Lower Case Letters? OK = Yes or Cancel = No");
  if (lowerCaseChoice === true) {
    oneArray = oneArray.concat(lowerCase);
    console.log ("I'm going to use Lowercase Letters");
    console.log(oneArray);
  }
  else{}

  // uppercase Y or N
  var upperCaseChoice = window.confirm("Use Upper Case Letters? OK = Yes or Cancel = No");
  if (upperCaseChoice === true) {
    console.log("I'm going to use uppercase letters");
    oneArray = oneArray.concat(upperCase);
    console.log(oneArray);
    //pull random number of uppercase letters
  }

  // numeric Y or N
  var numbersChoice = window.confirm("Use Numbers? OK = Yes or Cancel = No");
  if (numbersChoice === true) {
    console.log("I'm going to use Numbers");
    oneArray = oneArray.concat(numbers);
    console.log(oneArray);
    //pull random numners of numerical characters
  }

  // special characters Y or N
  var specialsChoice = window.confirm("Use Special Characters? OK = Yes or Cancel = No");
  if (specialsChoice === true) {
    console.log("I'm going to use special characters");
    oneArray = oneArray.concat(specials);
    console.log(oneArray);
    //pull random number of special characters
  }


  // if no character types are selected, end function 
  if (lowerCaseChoice === false && upperCaseChoice === false && numbersChoice === false && specialsChoice === false) {
    alert("Please select at least one character set");
    writePassword();
  }
 console.log("oneArray", oneArray);

// for (var i = 0; i < 50; i++){
//   var practice = Math.floor(Math.random() * 50);
//   console.log("practice", practice);

// }


  var generatePassword = function(){
    var results = []
    for (var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * oneArray.length);
    // console.log(oneArray[randomNumber]);
    results.push(oneArray[randomNumber]);
    }
  
  return results.join("");

  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
