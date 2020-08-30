const lowercaseLetters = getCharArray(97, 122);
const uppercaseLetters = getCharArray(65, 90);
const numbers = getCharArray(48, 57);
const symbols = getCharArray(33, 47);

const includeUppercase = document.getElementById("uppercaseCheckbox");
const includeNumbers = document.getElementById("numbersCheckbox");
const includeSymbols = document.getElementById("symbolsCheckbox");
const passwordLength = document.getElementById("passwordLength");
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  let allPasswordChars = lowercaseLetters;
  if (includeUppercase.checked) {
    allPasswordChars.push(uppercaseLetters);
  }
  if (includeNumbers.checked) {
    allPasswordChars.push(numbers);
  }
  if (includeSymbols.checked) {
    allPasswordChars.push(symbols);
  }

  let finalPassChars = allPasswordChars.flat();
  let password = "";
  let intPasswordLength = parseInt(passwordLength.value);

  for (let i = 0; i < intPasswordLength; i++) {
    //Find which variables are selected and include them in the string based on seleced length
    let randomChar =
      finalPassChars[Math.floor(Math.random() * allPasswordChars.length)];
    let convertChar = String.fromCharCode(randomChar);
    password += convertChar;
  }
  return password;
}

function getCharArray(min, max) {
  let charInput = [];
  for (let i = min; i <= max; i++) {
    charInput.push(i);
  }
  return charInput;
}

generateBtn.addEventListener("click", writePassword);