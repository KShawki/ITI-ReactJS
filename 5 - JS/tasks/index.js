const validatePhoneNumber = phone => /^\d{8}$/.test(phone); 
const validateMobileNumber = mobile => /^(010|011|012)\d{11}$/.test(mobile);
const validateEmail = email => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

var name = prompt('Please enter your name:');
var phoneNumber = prompt('Please enter your phone number (8 digits):');
var mobileNumber = prompt('Please enter your mobile number (11 digits starting with 010, 011, or 012):');
var email = prompt('Please enter your email address:');
var color = prompt('Choose a color for the welcoming message (red, green, or blue):');


if (!isNaN(name) || !validatePhoneNumber(phoneNumber) || !validateMobileNumber(mobileNumber) || !validateEmail(email)) {
  alert('Invalid input! Please provide valid information.');
} else {
  const nameColoredMessage = `<span style="color: ${color};">${name}</span>`;
  document.getElementsByClassName('name').innerHTML = nameColoredMessage;

  const telephoneColoredMessage = `<span style="color: ${color};">${phone}</span>`;
  document.getElementsByClassName('telephoneNumber').innerHTML = telephoneColoredMessage;

  const mobileColoredMessage  = `<span style="color: ${color};">${mobileNumber}</span>`;
  document.getElementsByClassName('mobileNumber').innerHTML = mobileColoredMessage;

  const emailColoredMessage = `<span style="color: ${color};">${phone}</span>`; 
  document.getElementsByClassName('email').innerHTML = emailColoredMessage; 
}


// ------------------------------------------------------------------------------------

// function ArrayTask() {
//   let arr = []; 
//   for (let i = 0; i < 5; i++) {
//     var x = parseInt(prompt("Enter Your Number: " + (i+1))); 
//     arr.push(x); 
//   }
  
//   // Sort the array in descending order
//   const descendingArr = arr.slice().sort((a, b) => b - a);

//   // Sort the array in ascending order
//   const ascendingArr = arr.slice().sort((a, b) => a - b);

//   console.log("Original Array:", arr);
//   console.log("Descending Sorted Array:", descendingArr);
//   console.log("Ascending Sorted Array:", ascendingArr);  
// }

// ArrayTask(); 

// ------------------------------------------------------------------------------------

// function calculateCircleArea() {
//   const radius = parseFloat(prompt("Enter the radius of the circle:"));
  
//   if (isNaN(radius) || radius <= 0) {
//     alert("Invalid input! Please enter a valid positive number.");
//     return; 
//   }
  
//   const area = Math.PI * radius * radius;
//   alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
// }

// calculateCircleArea();

// ------------------------------------------------------------------------------------

// function calculateSquareRoot() {
//   const value = parseFloat(prompt("Enter a value to calculate its square root:"));

//   if (isNaN(value) || value < 0) {
//     alert("Invalid input! Please enter a valid non-negative number.");
//     return;
//   }

//   const squareRoot = Math.sqrt(value);
//   alert(`The square root of ${value} is ${squareRoot.toFixed(2)}`);
// }

// calculateSquareRoot();

// ------------------------------------------------------------------------------------

// function calculateCOS() {
//   const value = parseFloat(prompt("Enter a value to calculate its cos value :"));

//   if (isNaN(value) || value < 0) {
//     alert("Invalid input! Please enter a valid non-negative number.");
//     return;
//   }

//   const cosValues = Math.cos(value);
//   alert(`The square root of ${value} is ${cosValues.toFixed(2)}`);
// }

// calculateCOS();

// ------------------------------------------------------------------------------------
