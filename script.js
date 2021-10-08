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

    // Special Characters
    var special = confirm("Special Characters?");
    
    // Numeric Characters
    var numeric = confirm("Numeric Characters?");
    
    // Uppercased Characters
    var upperCased = confirm("Uppercased Characters?");

    // Lowercased Characters
    var lowerCased = confirm("Lowercased Characters?");
    
    // length of password wanted
    var length = parseInt(prompt("How many characters?"));

    // Checks if length is not less than 10 and noit greater than 64
    if (length >=10 && length <=64) {
      console.log(length);
    } else {
      alert("10 to 64 characters.");
    }

    var passwordOptions = {
      length: length,
      special: special,
      numeric: numeric,
      upperCased: upperCased,
      lowerCased: lowerCased
    };
    console.log(passwordOptions)

  return passwordOptions;
  
}

// Function for getting a password element from an array
function getRandom(passwordOptions) {
  var randomArray = Math.floor(Math.random() * passwordOptions.length);
  var randomCharacter = passwordOptions[randomArray];
  return randomCharacter;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  var randomPassword = [];
  var possible = [];
  var guaranteed = [];

  if (options.special) {
    possible = possible.concat(specialCharacters);
    guaranteed.push(getRandom(specialCharacters));
  }
  console.log(possible);
  console.log(guaranteed);

  if (options.numeric) {
    possible = possible.concat(numericCharacters);
    guaranteed.push(getRandom(numericCharacters));
  }

  if (options.lowerCased) {
    possible = possible.concat(lowerCasedCharacters);
    guaranteed.push(getRandom(lowerCasedCharacters));
  }

  if (options.upperCased) {
    possible = possible.concat(upperCasedCharacters);
    guaranteed.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possible);

    randomPassword.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteed.length; i++) {
    randomPassword[i] = guaranteed[i];
  }
  console.log(randomPassword);

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