let passwordBox = document.querySelector("#password");
let generateBtn = document.querySelector(".generateBtn");
let copy = document.querySelector(".copy");

let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerCase = "qwertyuiopasdfghjklzxcvbnm";
let number = "0123456789";
let symbol = "!@#$%&*-_";
let length=prompt('Enter the length of password to be generated !');
let allchar = upperCase + lowerCase + number + symbol;

let pass = passwordBox.value;

function strongpassgenerate() {
  password = "";

  while (length > password.length) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }
  passwordBox.value = password;
}

function copypassword() {
  pass.select();
  document.execCommand("copy");
}
