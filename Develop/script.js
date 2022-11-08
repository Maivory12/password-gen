// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = (prompt("choose password length between 8 and 128 characters"))
  console.log(passwordLength)
  if (!passwordLength) {
    alert("You must choose a number");
  } else if (passwordLength<8 || passwordLength>128) {
    alert("You must choose between 8 and 128 characters")
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

