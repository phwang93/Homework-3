// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '!', '#', '@', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ',', '|', ':',';', '<', '>', '?', '.', ',', '`', '~',
];

const numericCharacters = [ '1', '2','3','4','5','6','7','8','9','0'];

const lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t', 'u','v','w','x','y','z'];

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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
