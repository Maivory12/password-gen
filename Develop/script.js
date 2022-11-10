// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`); 
var lowerCase = (`abcdefghijklmnopqrstuvwxyz`);
var number = (0,1,2,3,4,5,6,7,8,9);
var symbol = (`!@#$%^&*()-+`);
var typeOfcharacter = ``
var password = ``

// Write password to the #password input

function writePassword() {
  var passwordLength = parseInt(prompt("choose password length between 8 and 128 characters"))
  console.log(passwordLength)
  //
  if (!passwordLength) {

    alert("You must choose a number");

  } else if (passwordLength<8 || passwordLength>128)
  {
    alert("You must choose between 8 and 128 characters")
  }
  else {
    //
    if (confirm(`Do you want an uppercase character?`)) {
      typeOfcharacter +=  upperCase;
    }
    //
    if (confirm(`Do you want an lowercase character?`)) {
      typeOfcharacter += lowerCase;
    }
    //
    if (confirm(`Do you want a number character?`)) {
      typeOfcharacter += number;

    } 
    //
    if (confirm(`Do you want a symbol?`)) {
      typeOfcharacter += symbol;
    }
    //
    if (typeOfcharacter.length >= 1){
      for (var i = 0; i <= passwordLength; i++){

      password += typeOfcharacter[Math.floor(Math.random() * typeOfcharacter.length)];
      }
    
    }
    // 
      else {
      alert(`You must choose a character, number, or symbol.`);
    
    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 