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
  var passwordLength = parseInt(prompt("Enter a number between 8 and 128 characters to be the length of your password"))
  console.log(passwordLength)
  //Alerts user that a number must be entered.
  if (!passwordLength) {

    alert("You must choose a number between 8 and 128");

  } 
  //Alerts user to choose a password length between 8 and 128 characters.

  else if (passwordLength<8 || passwordLength>128)
  {
    alert("You must choose between 8 and 128 characters")
  }
  else {
  //Allows user to choose uppercase characters to add to password.

    if (confirm(`Do you want to have uppercase letters?`)) {
      typeOfcharacter +=  upperCase;
    }
  //Allows user to choose lowercase characters to add to password.

    if (confirm(`Do you want to have lowercase letters?`)) {
      typeOfcharacter += lowerCase;
    }
  //Allows user to choose numbers to add to password.

    if (confirm(`Do you want to have numbers?`)) {
      typeOfcharacter += number;

    } 
   // Allows user to choose symbols to add to password.

    if (confirm(`Do you want symbols?`)) {
      typeOfcharacter += symbol;
    }
  // For loop to choose random items from list of choices if selected.

    if (typeOfcharacter.length >= 1){
      for (var i = 0; i <= passwordLength; i++){

      password += typeOfcharacter[Math.floor(Math.random() * typeOfcharacter.length)];
      }
      // User is alerted if no criteria is met.
    } else {
      alert(`You must choose to have letters, numbers, or symbols to generate a password.`);
    
    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 