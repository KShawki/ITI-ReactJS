
// ----------------------------------------
// Script 1
// ----------------------------------------

// var flag = true, result = 0;

// while (flag) {
//   var y = parseInt(prompt('enter the number: '));
//   if (y == 0) {
//     flag = false;
//     alert(`Result = ` + result) 
//   } else {
//     result += y; 
//   }
// }

// ----------------------------------------
// Script 2 
// ----------------------------------------

// function isPalindrome(str) {
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }

// function checkPalindromeWithCase() {
//   const inputString = prompt("Enter a string:");
//   const caseSensitive = confirm("Do you want to consider case sensitivity? Click OK for Yes, Cancel for No.");

//   if (!caseSensitive) {
//       const lowercaseString = inputString.toLowerCase();
//       if (isPalindrome(lowercaseString)) {
//           alert("The entered string is a palindrome.");
//       } else {
//           alert("The entered string is not a palindrome.");
//       }
//   } else {
//       if (isPalindrome(inputString)) {
//           alert("The entered string is a palindrome.");
//       } else {
//           alert("The entered string is not a palindrome.");
//       }
//   }
// }
// checkPalindromeWithCase();



// ----------------------------------------
// Script 3 
// ----------------------------------------

// var x = prompt("Enter Your Word: "); 
// var lengthOfE = x.split("e"); 
// alert(lengthOfE.length - 1)


// ----------------------------------------
// Script 4
// ----------------------------------------

const evenOdd = () => {
  var i = parseInt(prompt("enter number: ")); 
  alert(i%2 == 0? "Even": "Odd");
}
evenOdd(); 

