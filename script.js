// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character sets to be used when user selects they want to use an option. 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specials = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"];

function writePassword() {
  // This loop promopts people to enter a password length of their choosing. If password is fewer than 8 or greater 
  // than 128 characters the function is stopped and restarted. If the user selects cancel at any time, the function is cancelled. 

  // oneArray begins blank and will be the array all user selections are concatenated. 
  var oneArray = [];
  var passwordLength = window.prompt("Select Length of Password between 8 and 128 characters");
  if (passwordLength === null) {
    return;
  }
  if (!passwordLength) {
    alert("Please select a value between 8 and 128");
    return writePassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a value between 8 and 128");
    return writePassword();
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
  }
  else {
    alert("Please select a value between 8 and 128");
    return writePassword();
  }

  // Users are prompted to select whether or not to include lowercase, uppercase, numbers, or special characters for lines 31 through
  // 89. When users do not select a Y or N, they are sent back to the beginning to begin again. If a user selects Y for any of the characters
  // all possible choices are put into oneArray to be stored to use when generating a random password. 
  var lowerCaseChoice = window.prompt("Use Lower Case Letters? Y or N");
  lowerCaseChoice = lowerCaseChoice.toUpperCase();
  if (lowerCaseChoice === "Y") {
    oneArray = oneArray.concat(lowerCase);
  }
  else if (lowerCaseChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }

  var upperCaseChoice = window.prompt("Use Upper Case Letters? Y or N");
  upperCaseChoice = upperCaseChoice.toUpperCase();
  if (upperCaseChoice === "Y") {
    oneArray = oneArray.concat(upperCase);

  }
  else if (upperCaseChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }

  var numbersChoice = window.prompt("Use Numbers? Y or N");
  numbersChoice = numbersChoice.toUpperCase();
  if (numbersChoice === "Y") {
    oneArray = oneArray.concat(numbers);

  }
  else if (numbersChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }

  var specialsChoice = window.prompt("Use Special Characters? Y or N");
  specialsChoice = specialsChoice.toUpperCase();
  if (specialsChoice === "Y") {
    oneArray = oneArray.concat(specials);
  }
  else if (specialsChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }
  // If the user does not select one of the character choices, they recieve an alert that they have to select at least one
  // and are brought back to the beginning to start again. 
  if (lowerCaseChoice === "N" &&
    upperCaseChoice === "N" &&
    numbersChoice === "N" &&
    specialsChoice === "N") {
    alert("Please select at least one character set");
    return writePassword();
  }

  // This function utilizes the blank array results to house the correct number of random user selected character sets by using a for
  // loop by pulling random characters from the array oneArray
  var generatePassword = function () {
    var results = []
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * oneArray.length);
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
