// Assignment Code
const generateBtn = document.querySelector("#generate");

function getAllowedChars() {
    const numerics = "0123456789";
    const alphaLower = "abcdefghijklmnopqrstuvwxyz";
    const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    const result = "";
    let allowedChars = "";

    
    let charsLength = window.prompt("How many characters would you like your password to contain?");
    const inputIsANumber = !isNaN(parseInt(charsLength))
    const isValidLength = charsLength >= 8 && charsLength <= 128;

    if (!inputIsANumber || !isValidLength){
        alert('Please enter a valid number between 8 and 128, try again!');
        return;
    }

    const shouldIncludeSpecialChars = window.confirm("Click ok to include special characters")
    if (shouldIncludeSpecialChars) {
        allowedChars = allowedChars.concat(specialChars)
    }

    


  
}
function generatePassword() {
    const allowChars = getAllowedChars();


}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
