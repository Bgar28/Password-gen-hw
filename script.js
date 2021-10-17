// Assignment Code
const generateBtn = document.querySelector("#generate");
let passwordLength = 0;

// generates the password 
function getGeneratedPassword(allowedChars){
    let password = "";
    // iterates based on length of user's preferred password length
    for(let i = 0; i <= passwordLength; i++) {
        // gets random number based on number of allowed characters
        const randomNumber = Math.floor(Math.random() * allowedChars.length);
        // gets character from allowed character string based on random index
        const selectedChar = allowedChars[randomNumber];
        // adds each selected character to the password string
        password += selectedChar;
    }
    return password;
}

// gets all of the user preferred characters based on responses to the prompts - returns preferred chars 
function getAllowedChars() {
    const numerics = "0123456789";
    const alphaLower = "abcdefghijklmnopqrstuvwxyz";
    const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let allowedChars = "";

    
    passwordLength = window.prompt("How many characters would you like your password to contain?");

    // check if user cancels out of prompt
    if(!passwordLength){
        alert("Goodbye");
        return;
    }

    // check that input is a valid number
    const inputIsANumber = !isNaN(parseInt(passwordLength));
    // check if valid length
    const isValidLength = passwordLength >= 8 && passwordLength <= 128;
    // checks whether it's ok to continue with prompts
    const isNotOK = !inputIsANumber || !isValidLength;

    if (isNotOK){
        alert('Please enter a valid number between 8 and 128, try again!');
        return;
    }

    // prompts user for password requisites and if true adds char types to allowedChars variable
    const shouldIncludeSpecialChars = window.confirm("Click ok to include special characters");
    if (shouldIncludeSpecialChars) {
        allowedChars = allowedChars.concat(specialChars);
    }

    const shouldIncludeNumerics = window.confirm("Click ok to include numerics");
    if (shouldIncludeNumerics) {
        allowedChars = allowedChars.concat(numerics);
    }

    const shouldIncludeLowerAlpha = window.confirm("Click ok to include lowercase letters");
    if (shouldIncludeLowerAlpha) {
        allowedChars = allowedChars.concat(alphaLower);
    }

    const shouldIncludeUpperAlpha = window.confirm("Click ok to include uppercase letters");
    if (shouldIncludeUpperAlpha) {
        allowedChars = allowedChars.concat(alphaUpper);
    }

    // returns all collected prompt responses
      return allowedChars;
           
}

    // 
function generatePassword() {
    // gets the requisite characters
    const allowedChars = getAllowedChars();
    // returns the result of using the allowed chars to generate the password
    return getGeneratedPassword(allowedChars);


}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
