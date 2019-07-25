/*

Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

I - array of sorted integer values
O - index of the target value
E - n/a
C - n/a

*/

function divideAndConquer(arr, target) {
  var found = true;
  var index = 0;
  var newArr = arr;
  var midPoint = Math.floor(newArr.length / 2);

  while (newArr[midPoint] !== target) {
    if (target > newArr[midPoint]) {
      newArr = newArr.slice(midPoint, newArr.length);
      midPoint = Math.floor(newArr.length / 2);
    } else {
      newArr = newArr.slice(0, midPoint);
      midPoint = Math.floor(newArr.length / 2);
    };
  };

  return arr.indexOf(newArr[midPoint]);
};

console.log(divideAndConquer([1, 3, 16, 22, 31, 33, 34], 31))
