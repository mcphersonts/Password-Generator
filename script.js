var lowercaseLetters = getCharArray(97, 22)
var includeUppercase = document.getElementById("uppercaseCheckbox");
var uppercaseLetters = getCharArray(65, 90);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

}
function getCharArray(min, max) {
  var charInput = [];
  for (var i = min; i <= max; i+=2) {
    charInput.push(i);
  } 
  return charInput;
}
generateBtn.addEventListener("click", writePassword);
