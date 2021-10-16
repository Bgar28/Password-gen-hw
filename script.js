// Assignment Code
const generateBtn = document.querySelector("#generate");

function getAllowedChars() {
    const numerics = "0123456789";
    const alphaLower = "abcdefghijklmnopqrstuvwxyz";
    const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    const charsLength = window.prompt("How many characters would you like your password to contain?");
}

function generatePassword() {
    const allowChars = getAllowedChars();
    const result = "";


}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
