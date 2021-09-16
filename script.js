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

var randomPassword;
var passwordOptions = [];
var option;

// Function to prompt user for password options
function getPasswordOptions() {

  // Special Characters
  var special = confirm("Special Characters?");
  // push characters into passwordOptions if Yes
  if (special) {
    passwordOptions.push(specialCharacters);
  }
  console.log(passwordOptions);

  // Numeric Characters
  var numeric = confirm("Numeric Characters?");
  if (numeric) {
    passwordOptions.push(numericCharacters);
  }
  console.log(passwordOptions);

  // Uppercased Characters
  var upperCased = confirm("Uppercased Characters?");
  if (upperCased) {
    passwordOptions.push(upperCasedCharacters);
  }
  console.log(passwordOptions);

  // Lowercased Characters
  var lowerCased = confirm("Lowercased Characters?");
  if (lowerCased) {
    passwordOptions.push(lowerCasedCharacters);
  }
  console.log(passwordOptions);

  // variable for length
  var length;
  length = parseInt(prompt("How many characters?"));
    
  // Checks if length is not less than 10 and noit greater than 64
  if (length >=10 && length <=64) {
    return;
  }
  getRandom();

}

// Function for getting a random element from an array
function getRandom() {
  randomPassword = [Math.floor(Math.random() * passwordOptions.length)];
  return;
}

// Function to generate password with user input
function generatePassword() {

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