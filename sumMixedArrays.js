/*

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

function sumMix(x){
  var i;
  var sum = []

  for(i = 0; i < x.length; i++) {
    if (Number.isInteger(x[i])) {
      sum.push(x[i])
    } else {
      num = parseInt(x[i])
      sum.push(num)
    };
  };

  function getSum(total, num) {
    return total + num;
  };

  return sum.reduce(getSum);
};

/* Best Practice

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

*/
