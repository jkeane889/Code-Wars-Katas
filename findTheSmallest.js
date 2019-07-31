function smallest(n) {
  var digits = '0123456789';
  var digitsArr = digits.split('');
  var digitsHash = {};
  var minNum = n;
  var fromIndex;
  var toIndex;
  var finalArr = [];

  digitsArr.forEach(function(digit) {
    digitsHash[digit] = [];
  });

  var nArr = n.toString().split('');
  nArr.forEach(function(value, index) {
    for (var key in digitsHash) {
      if (parseInt(value) === parseInt(key)) {
        digitsHash[key].push(index);
      };
    };
  });

  // console.log(digitsHash)

  for (var key in digitsHash) {
    if (digitsHash[key].length !== 0) {
      var indexArr = digitsHash[key];
      indexArr.forEach(function (value, index) {
        var nCopy = n.toString().split('');
        var nFiltered = nCopy.filter(function (val, idx) {
          if (value !== idx) {
            return val;
          };
        });

        for (var i = 0; i <= nFiltered.length; i++) {
          nFiltered.splice(i, 0, key);
          var newNum = parseInt(nFiltered.join(''));
          if (newNum < minNum) {
            minNum = newNum;
            fromIndex = value;
            toIndex = i;
            nCopy = n.toString().split('');
            nFiltered = nCopy.filter(function (val, idx) {
              if (value !== idx) {
                return val;
                };
            });
          } else if ((newNum <= minNum) && (value < fromIndex)) {
            minNum = newNum;
            fromIndex = value;
            toIndex = i;
            nCopy = n.toString().split('');
            nFiltered = nCopy.filter(function (val, idx) {
              if (value !== idx) {
                return val;
                };
            });
          } else {
            nCopy = n.toString().split('');
            nFiltered = nCopy.filter(function (val, idx) {
              if (value !== idx) {
                return val;
                };
            });
          };
        };
      });
    };
  };

  if (minNum === n) {
    return [n, 0, 0];
  } else {
    finalArr.push(minNum, fromIndex, toIndex);
    return finalArr;
  };
};

// ASSERT Function Tests

function assertArraysEqual(actual, expected, testName) {
  var bool = true;

  for (var i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      bool = false;
    };
  };

  if ((actual.length === expected.length) && (bool === true)) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}] Expected '${expected}' but got '${actual}'`);
  };
};

assertArraysEqual(smallest(261235), [126235, 2, 0], 'Test arrays equal');
assertArraysEqual(smallest(209917), [29917, 0, 1], 'Test arrays equal');
assertArraysEqual(smallest(285365), [238565, 3, 1], 'Test arrays equal');
assertArraysEqual(smallest(269045), [26945, 3, 0], 'Test arrays equal');
assertArraysEqual(smallest(296837), [239687, 4, 1], 'Test arrays equal');
assertArraysEqual(smallest(187863002809), [18786300289, 10, 0], 'Test arrays equal');
assertArraysEqual(smallest(199819884756), [119989884756, 4, 0], 'Test arrays equal');
assertArraysEqual(smallest(111111111), [111111111, 0, 0], 'Test arrays equal');
assertArraysEqual(smallest(3064768930997586), [306476893997586, 9, 0], 'Test arrays equal');
assertArraysEqual(smallest(982332048103575), [98233204813575, 10, 0], 'Test arrays equal');
assertArraysEqual(smallest(8476404577913409), [847640457791349, 14, 0], 'Test arrays equal');
