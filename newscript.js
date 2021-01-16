// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specials = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"];

function writePassword() {
  //this loop promopts people to enter a password length of their choosing. If password is fewer than 8 or greater 
  //than 128 characters the function is stopped and restarted. If the user selects cancel at any time, the function is cancelled. 
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
  // prompt to choose lowercase Y or N
  var lowerCaseChoice = window.prompt("Use Lower Case Letters? Y or N");
  lowerCaseChoice = lowerCaseChoice.toUpperCase();
  if (lowerCaseChoice === "Y") {
    oneArray = oneArray.concat(lowerCase);
    console.log("I'm going to use Lowercase Letters");
    console.log(oneArray);
  }
  else if (lowerCaseChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }
  // uppercase Y or N
  var upperCaseChoice = window.prompt("Use Upper Case Letters? Y or N");
  upperCaseChoice = upperCaseChoice.toUpperCase();
  if (upperCaseChoice === "Y") {
    console.log("I'm going to use uppercase letters");
    oneArray = oneArray.concat(upperCase);
    console.log(oneArray);
    //pull random number of uppercase letters
  }
  else if (upperCaseChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }
  // numeric Y or N
  var numbersChoice = window.prompt("Use Numbers? Y or N");
  numbersChoice = numbersChoice.toUpperCase();
  if (numbersChoice === "Y") {
    console.log("I'm going to use Numbers");
    oneArray = oneArray.concat(numbers);
    console.log(oneArray);
    //pull random numners of numerical characters
  }
  else if (numbersChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }
  // special characters Y or N
  var specialsChoice = window.prompt("Use Special Characters? Y or N");
  specialsChoice = specialsChoice.toUpperCase();
  if (specialsChoice === "Y") {
    console.log("I'm going to use special characters");
    oneArray = oneArray.concat(specials);
    console.log(oneArray);
  }
  else if (specialsChoice === "N") {
  }
  else {
    alert("Please select Y or N");
    return writePassword();
  }
  // if no character types are selected, end function 
  if (lowerCaseChoice === "N" && upperCaseChoice === "N" && numbersChoice === "N" && specialsChoice === "N") {
    alert("Please select at least one character set");
    return writePassword();
  }

  var generatePassword = function () {
    var results = []
    for (var i = 0; i < passwordLength; i++) {
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
