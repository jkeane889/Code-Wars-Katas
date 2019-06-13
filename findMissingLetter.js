/*

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

*/

function findMissingLetter(array) {
  var alpha = "abcdefghijklmnopqrstuvwxyz"
  var lower_array = array.join("").toLowerCase().split("")

  var index = alpha.indexOf(lower_array[0]);
  var j = 0

  while (j < lower_array.length) {
    if (lower_array[j] === alpha[index]) {
      j += 1
      index += 1
    } else {
      if (array[0] === array[0].toUpperCase()) {
        return alpha[index].toUpperCase()
      } else {
        return alpha[index]
      };
    };
  };
};

/* Best Practice

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}

*/
