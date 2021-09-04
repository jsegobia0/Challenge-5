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

// global variables
var passwordOptions = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];
var emptyArray = [];
var passwordStrings = [" special characters? ", " numeric characters? ", " lowercased characters? ", " uppercased characters? "];
var anything;
var amount;


// Function to prompt user for password options
function getPasswordOptions() {

  passwordOptions.forEach(element => {
    var answer = confirm("Would you like to have " + passwordStrings[0]);
    if (answer) {
      emptyArray.push(...element);
      console.log(emptyArray);
    }
  });

  console.log(emptyArray);
  amount = prompt(" how many characters for your password? ");
  amount = parseInt(amount);
  getRandom();
};

// Function for getting a random element from an array
function getRandom() {
  // console.log(amount);
  for (var i = 0; i < amount; i++) {
    anything = emptyArray[Math.floor(Math.random(i) * emptyArray.length)];
  }
  console.log(anything);
};

// Function to generate password with user input
function generatePassword() {
  var specialCh = getRandom(specialCharacters)
  console.log(specialCharacters)
  newpassword.push(specialCh);
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);