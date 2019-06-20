/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(A) {
  var integers = {}
  A.map(function(currentValue, index) {
    if (integers.hasOwnProperty(currentValue)) {
      integers[currentValue] = integers[currentValue] + 1;
    } else {
      integers[currentValue] = 1
    }
  });

  for (var key in integers) {
    if (integers[key] % 2 != 0) {
      return parseInt(key)
    };
  };
};

/* Best Practice

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });

  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

*/
