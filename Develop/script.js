// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T", "U","V","W","X","Y","Z"]; 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var symbol = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`,`(`,`)`,`_`,`+`,`-`];
var typeOfcharacter = ``

// Write password to the #password input
function writePassword() {
  var passwordLength = (prompt("choose password length between 8 and 128 characters"))
  console.log(passwordLength)
  if (!passwordLength) {

    alert("You must choose a number");

  } else if (passwordLength<8 || passwordLength>128)
  {
    alert("You must choose between 8 and 128 characters")
  }
  else {
    if (confirm(`Do you want an uppercase character?`)) {
      typeOfcharacter = typeOfcharacter + upperCase;
    }

    if (confirm(`Do you want an lowercase character?`)) {
      typeOfcharacter = typeOfcharacter + lowerCase;

    }

    if (confirm(`Do you want a number character?`)) {
      typeOfcharacter = typeOfcharacter + number;

    } 

    if (confirm(`Do you want a symbol?`)) {
      typeOfcharacter = typeOfcharacter + symbol;

    }
    

  }

  




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 