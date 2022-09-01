// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// if 'max' is not defined; assume we want range from 0 to min
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  
  // random value
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}


function getRandomItem(list) {
  return list[randomInt(list.length)]
}

//define generatePassword 
function generatePassword() {
  
  // prompt the user for the password criteria
  var userChoice = window.prompt ("How many characters needed in your password?") 

  var passwordLength = parseInt(userChoice)

  if (isNaN(passwordLength)) {
    window.alert("Invalid response, type number of character needed in password")
    return;
  }
//  password length 8 < 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Choose between 8-128 Characters")
    return;
  }

//  lowercase, uppercase, numbers, special characters
  var userChoiceNumbers = window.confirm("Would you like to include number?")
  var userChoiceUpperCases = window.confirm("Would you like to include upper case letters?")
  var userChoiceLowerCases = window.confirm("Would you like to include lower case letters?")
  var userChoiceSpecialCharacters = window.confirm("Would you like to include special characters?")

  var NumberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
  var UpperCaseLetterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var LowerCaseLetterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var SpecialCharacterList = [ "!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">"]

  var optionsSelect = []

  if (userChoiceNumbers === true){
    optionsSelect.push(NumberList)
  }

  if (userChoiceUpperCases === true){
    optionsSelect.push(UpperCaseLetterList)
  }

  if (userChoiceLowerCases === true){
    optionsSelect.push(LowerCaseLetterList)
  }

  if (userChoiceSpecialCharacters === true){
    optionsSelect.push(SpecialCharacterList)
  }

// input should be validated w/at least one character type selected
  if (optionsSelect.length === 0) {
    window.alert("Invalid response, need to select at least one criteria. Try again")
    return;
  }

  // generate password based on criteria
  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsSelect)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
