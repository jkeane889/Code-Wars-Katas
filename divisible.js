/*

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

*/
function divisibleBy(numbers, divisor){
  divArr = []
  var i;
  var divisibles = numbers.map(divisible)

  function divisible(num) {
    if (num % divisor === 0) {
      return num
    };
  };

  for (i = 0; i <= divisibles.length; i++) {
    if (divisibles[i] !== undefined) {
      divArr.push(divisibles[i])
    };
  };

  return divArr;
};

/* Best Practice:

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0);
}

*/
