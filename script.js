// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Password length
  var length = parseInt(prompt("Password length?"));
  // Checks if length is not less than 10 and not greater than 64
  if (length >=10 && length <=64) {
    console.log(length);
  } else {
    alert("10 to 64 characters.");
  }

  // stores characters if true
  var special = confirm ("Special characters?");
  var numeric = confirm ("Numeric characters?");
  var lowerCased = confirm ("Lowercased characters?");
  var upperCased = confirm ("Uppercased characters?");

  // stores cuser input
  var passwordOptions = {
    length: length,
    special: special,
    numeric: numeric,
    lowerCased: lowerCased,
    upperCased: upperCased,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // selects random stored array
  var randomCharacterType = Math.floor(Math.random() * arr.length);
  // selects random character from within array
  var randomCharacter = arr[randomCharacterType];
  // gives random character a value
  return randomCharacter;
}

// Function to generate password with user input
function generatePassword() {
  // calls get password function to get password options
  var options = getPasswordOptions();

  // stores result of chosen characters as 1 array
  var randomPassword = [];

  // stores character types as an array
  var characterType = [];

  // stores 1 of each character in an array
  var characters = [];
  
  if(options.special) {
    characterType = characterType.concat(numericCharacters);
    characters.push(getRandom(specialCharacters));
  }

  if(options.numeric) {
    characterType = characterType.concat(numericCharacters);
    characters.push(getRandom(numericCharacters));
  }

  if(options.lowerCased) {
    characterType = characterType.concat(lowerCasedCharacters);
    characters.push(getRandom(lowerCasedCharacters));
  }

  if(options.upperCased) {
    characterType = characterType.concat(upperCasedCharacters);
    characters.push(getRandom(upperCasedCharacters));
  }

  if(options.special) {
    characterType = characterType.concat(upperCasedCharacters);
    characters.push(getRandom(specialCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var characterType = getRandom(characterType);

    result.push(characterType);
  }

  for (var i = 0; i < characters.length; i++) {
    randomPassword[i] = characters[i];
  }

  return randomPassword.join('');
  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);