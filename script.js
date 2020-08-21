const lowercaseLetters = getCharArray(97, 122);
const uppercaseLetters = getCharArray(65, 90);
const numbers = getCharArray(48, 57);

const includeUppercase = document.getElementById("uppercaseCheckbox");
const includeNumbers = document.getElementById("numbersCheckbox");
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

}
function getCharArray(min, max) {
  let charInput = [];
  for (let i = min; i <= max; i+=2) {
    charInput.push(i);
  } 
  return charInput;
}
generateBtn.addEventListener("click", writePassword);
