// Assignment Code
const specialCharacters = ['!', '#', '@', '$', '%', '^', '&', '*', '~'];

const numericCharacters = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', `I`, 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let generateBtnE1 = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password === undefined) {
    return
  }

  passwordText.value = password;
}

function generatePassword() {
  let selectedOptions = getUserSelection()

  if (selectedOptions === undefined)  {
    return
  }
  
let { length, numbers, lowercase, uppercase, specialChars } = selectedOptions
let possibleCharacters = [];
let generatedPassword = "";

if (lowercase) {
  possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
}

if (uppercase) {
  possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
}

if (specialChars) { 
  possibleCharacters = possibleCharacters.concat(specialCharacters)
}

if (numbers) { 
  possibleCharacters = possibleCharacters.concat(numericCharacters) 
}

for (i = 0; i < length + 1; i++)  {
  let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length);
  generatedPassword += possibleCharacters[randomCharIndex];
}

return generatedPassword
}

function getUserSelection() {
  let numberofChars = parseInt(prompt('Provide number of characters for the password. Please provide a number from 6 to 60'));

  if (Number.isNaN(numberofChars)) {
    alert('Please enter a NUMBER')
    return
  }
  if (numberofChars < 6)  {
    alert('You must include at least 6 characters')
    return
  }
  else if (numberofChars > 60) {
    alert('You may not select more than 60 characters')
    return
  }
  let useLowerCase = confirm('Would you like to include LowerCase into you password?');
  let useUpperCase = confirm('Would you like to include UpperCase into you password?');
  let useSpecialChars =confirm('Would you like to include Special Characters into you password?');
  let useNumbers = confirm('Would you like to include Numbers into you password?');

  if (!useLowerCase && !useUpperCase && !useSpecialChars && !useNumbers)  {
    alert('You need to select a minimum of ONE character type!')
    return
  }

  let optionOBJ = {
    length: numberofChars,
    lowercase: useLowerCase,
    uppercase: useUpperCase,
    specialChars: useSpecialChars,
    numbers: useNumbers,
  }
  return optionOBJ
}

// Add event listener to generate button
generateBtnE1.addEventListener("click", writePassword);
