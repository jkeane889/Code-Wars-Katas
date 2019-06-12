/*

A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

You can expect all test case arguments to be strings representing values greater than 0.

*/

function divisibleByThree(str){
  var sum = 0
  var strArr = str.split("")
  strArr.forEach(function(element) {
    var newElem = parseInt(element);
    sum += newElem
  });
  if (sum % 3 == 0) {
    return true;
  } else {
    return false;
  };
};

/* Best Practice:

function divisibleByThree(str){
    return str.split('').reduce((a,b) => parseInt(a) + parseInt(b)) % 3 === 0
  }

*/
