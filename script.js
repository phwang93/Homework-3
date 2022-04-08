// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '!', '#', '@', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ',', '|', ':',';', '<', '>', '?', '.', ',', '`', '~',
];

const numericCharacters = [ '1', '2','3','4','5','6','7','8','9','0'];

const lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t', 'u','v','w','x','y','z'];

const upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let generateBtne1 = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password === undefined) {
    return
  };

  passwordText.value = password;
}

function generatePassword() {
  let selectedOptions = getUserSelection ()

  if (selectedOptions === undefined)  {
    return
  }
}

if (lowercase) {
  possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
}

if (uppercase) {
  possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
}

if (specialChars) { 
  possibleCharacters = possibleCharacters.concat(specialCaseCharacters)
}

if (numbers) { 
  possibleCharacters = possibleCharacters.concat(numericCharacters) 
}

for (i = 0; i < length + i; i++)  {
  let randomCharIndex = Math.floor(Math.random() = possibleCharacters.length)
  generatePassword += possibleCharacters[randomCharIndex] 
}

return generatedPassword
}
 

let { length, lowercase, uppercase, specialCharacters, numbers }  = selectedOptions;
let possibleCharacters = [];
let generatePassword = "";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
