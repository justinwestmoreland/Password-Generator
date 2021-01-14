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
  else if (!passwordLength) {
    alert("Please select a value between 8 and 128");
    return;
  }
  else if (passwordLength >= 8 && passwordLength <= 128) {
    //do something here
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {
      alert("Please select a value between 8 and 128");
      return;
    }
    else if (passwordLength > 128) {
      alert("Please select a value between 8 and 128");
      return;
    }
  }
  // prompt to choose lowercase Y or N
  var lowerCaseChoice = window.confirm("Use Lower Case Letters? OK = Yes or Cancel = No");
  if (lowerCaseChoice == true) {
    oneArray.push(lowerCase);
    console.log ("I'm going to use Lowercase Letters");
    console.log(oneArray);
  }
  else{}

  // uppercase Y or N
  var upperCaseChoice = window.confirm("Use Upper Case Letters? OK = Yes or Cancel = No");
  if (upperCaseChoice === true) {
    console.log("I'm going to use uppercase letters");
    oneArray.push(upperCase);
    console.log(oneArray);
    //pull random number of uppercase letters
  }

  // numeric Y or N
  var numbersChoice = window.confirm("Use Numbers? OK = Yes or Cancel = No");
  if (numbersChoice === true) {
    console.log("I'm going to use Numbers");
    oneArray.push(numbers);
    console.log(oneArray);
    //pull random numners of numerical characters
  }

  // special characters Y or N
  var specialsChoice = window.confirm("Use Special Characters? OK = Yes or Cancel = No");
  if (specialsChoice === true) {
    console.log("I'm going to use special characters");
    oneArray.push(specials);
    console.log(oneArray);
    //pull random number of special characters
  }


  // if no character types are selected, end function 
  if (lowerCaseChoice === false && upperCaseChoice === false && numbersChoice === false && specialsChoice === false) {
    alert("Please select at least one character set");
    writePassword();
  }

//this is where I am REALLY stuck. I have all the logic down, but how do I get my for loop to generate the correct number of characters from my oneArray to generate and print the password.
//why is this not working. Philip please help me. 

  var generatePassword = function(){
    var index = Math.floor(Math.random() * oneArray.length);

    for (i = 0; i < passwordLength; i++)
    console.log(oneArray[index]);
    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
