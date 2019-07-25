/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

I - array of negative and positive integers
O - array of integers that sum to greatest sum from original array
E - n/a
C - n/a

*/

var maxSequence = function(arr) {
  var initialSum = 0;

  if (arr.length === 0) {
    return initialSum;
  } else {
    sum = arr.reduce(function (total, val) {
    return total + val;
    });
  };

  var maxObj = {};
  var largestArr;
  var y = 0;

  while (y < arr.length) {
    var i = 0;
    var newArr = [];
    newArr.push(arr[y]);

    while (i < arr.length) {
      var newSum = 0;

      if (i > y) {
        newArr.push(arr[i]);
      };

      newSum = newArr.reduce(function (total, val) {
        return total + val;
      });

      if (newSum > sum) {
        sum = newSum;
        var finalArr = [];
        newArr.forEach(function(val) {
          finalArr.push(val);
        });
        var arrtotal = finalArr.reduce(function(total, val) {
          return total + val;
        })
        if (arrtotal === sum) {
          largestArr = finalArr;
        };
        i += 1;
      } else {
        i += 1;
      };
    };

   y += 1;
  };

  if (initialSum > sum) {
    return initialSum;
  } else {
    return sum;
  };
};

console.log(maxSequence([ -2, -1, -3, -4, -1, -2, -1, -5, -4 ]));
