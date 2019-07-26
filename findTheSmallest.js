/*

You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

#Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

1) the smallest number you got
2) the index i of the digit d you took, i as small as possible
3) the index j (as small as possible) where you insert this digit d to have the smallest number.
Example:

smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

smallest(209917) --> [29917, 0, 1] or ...

[29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
index `i` in [29917, 0, 1].
29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

smallest(1000000) --> [1, 0, 6] or ...

I - large number
O - array consisting of rearranged number that is the smallest achievable number possible with the given argument, the index of the moved integer, and then the integer that gave us the smallest number.
C - trimming zeroes?
E - n/a

*/

function smallest(n) {
  // convert n to string and then an array to move numbers' positions
  // create min number
  // for each of the integers move from the front to end of array, join array, and then retest that integer against the mininum, if it's smaller, set it as the new minimum, do this for every integer in the original number array

  var nArr = n.toString().split('');
  var sortedNArr = n.toString().split('').sort();
  var miniNum = n;
  var takenIndex = 0;
  var insertIndex = 0;
  var finalArr = [];

  sortedNArr.forEach(function (value, index) {
    var currentIndex = index;
    var newArr = splitAndFilter(n, value);
    var i = 0;

    while (i <= newArr.length) {
      newArr.splice(i, 0, value);
      var newNum = parseInt(newArr.join(''));
      if (newNum < miniNum) {
        insertIndex = newArr.indexOf(value);
        takenIndex = nArr.indexOf(value);
        miniNum = newNum;
        newArr = splitAndFilter(n, value);
        i += 1;
      } else {
        newArr = splitAndFilter(n, value);
        i += 1;
      };
    };
  });

  finalArr.push(miniNum, takenIndex, insertIndex);

  return finalArr;
};

function splitAndFilter(n, val) {
  var arr = n.toString().split('');
  var indexOfVal = arr.indexOf(val);
  var newArr = arr.filter(function (val, index) {
    if (index !== indexOfVal) {
      return val;
    };
  });

  return newArr;
};

console.log(smallest(261235));
