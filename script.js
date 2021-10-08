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
  // empty array to store pushed options on confirm
    var passwordOptions = [];

    // Special Characters
    var special = confirm("Special Characters?");
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
    
    // length of password wanted
    var length = parseInt(prompt("How many characters?"));

  // Checks if length is not less than 10 and noit greater than 64
   if (length >=10 && length <=64) {
    console.log(length);
  } else {
    alert("10 to 64 characters.");
  }

  return passwordOptions;
  
}

// Function for getting a password element from an array
function getRandom(arr) {
  var passIndex = Math.floor(Math.random() * arr.length);
  var passElement = arr[passIndex];
  return passElement;
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