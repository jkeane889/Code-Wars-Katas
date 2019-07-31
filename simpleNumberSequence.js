/*
I - string of potential sequence of ascending integers
O - missing integer from string sequence, or -1 if there are multiple missing integers, or if all the integers are accounted for.
E - trying to find integers that are outside of those given (i + 1 > length of string)
C - n/a?

*/

function missing(s) {
  var sSequence = createSequence(s, 1);
  var j = 0;
  var missing = [];

  while (j < sSequence.length - 1) {
    var currentElem = parseInt(sSequence[j]);
    var nextElem = parseInt(sSequence[j + 1]);
    if ((currentElem + 1) !== nextElem) {
      missing.push(currentElem + 1);
      j += 1;
    } else {
      j += 1;
    };
  };

  if (missing.length === 0) {
    return -1;
  } else if (missing.length > 1) {
    return -1;
  } else {
    return missing[0];
  };
};

function createSequence(element, len) {
  var lenOfInt = len;
  var sSequence = [];
  var i = 0;

  while (i <= element.length) {
    var currentDigit = element.slice(i, i + lenOfInt); // 99998
    console.log("-------")
    console.log("Current lenOfInt = " + lenOfInt)
    console.log(currentDigit)
    var desiredSecondDigit = parseInt(currentDigit) + 1; // 99999
    console.log(desiredSecondDigit);
    var desiredThirdDigit = parseInt(currentDigit) + 2; // 100000
    console.log(desiredThirdDigit);
    var desiredSecondDigitLen = desiredSecondDigit.toString().length; // 5
    console.log(desiredSecondDigitLen);
    var desiredThirdDigitLen = desiredThirdDigit.toString().length; // 6
    console.log(desiredThirdDigitLen);
    var nextDigit = element.slice(i + lenOfInt, (i + lenOfInt) + lenOfInt); // 10000
    console.log(nextDigit)
    var incLen = lenOfInt + 1; // 5 + 1 = 6
    console.log(incLen)
    var followingDigit = element.slice(i + lenOfInt, (i + lenOfInt) + incLen); // 100000
    console.log(followingDigit);
    if (nextDigit === '') {
      sSequence.push(currentDigit);
      i = element.length + 1;
      break;
    };
    var desiredSecondDigitSSliced = desiredSecondDigit.toString().slice(0, lenOfInt);
    console.log(desiredSecondDigitSSliced);
    var desiredThirdDigitSSliced = desiredThirdDigit.toString().slice(0, incLen); //
    console.log("Third digit sliced =" + desiredThirdDigitSSliced);

    if ((desiredThirdDigitSSliced === followingDigit) && (desiredThirdDigitLen > lenOfInt)) {
      sSequence.push(currentDigit);
      i += lenOfInt;
      lenOfInt = incLen;
    } else if ((desiredSecondDigitSSliced === nextDigit) && (desiredSecondDigitLen > lenOfInt)) {
      sSequence.push(currentDigit);
      i += lenOfInt;
      lenOfInt = desiredSecondDigitLen;
    } else {
      var newLen = checkSequence(currentDigit, nextDigit, lenOfInt)  // 6
      console.log(newLen)
      if (newLen > lenOfInt) {
        if (i > 0) {
          i -= lenOfInt;
        } else {
          i = 0;
        };

        lenOfInt = newLen;

        if (sSequence.length > 0) {
          sSequence.pop();
        };
      } else {
        sSequence.push(currentDigit);
        i += lenOfInt;
      };

      console.log(sSequence)
    };
  };

  return sSequence;
};

function checkSequence(currentDigit, nextDigit, lengthOfInt) {
  if ((parseInt(currentDigit) + 1) === parseInt(nextDigit)) { //
    return lengthOfInt;
  } else if ((parseInt(currentDigit) + 2) === parseInt(nextDigit)) { //
    return lengthOfInt;
  } else {
    return lengthOfInt + 1; // 5 + 1 = 6
  };
};

// console.log(missing('999909999199992999939999499995999969999799998100000100001100002100003'));

// ASSERT Test Functions

function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}] Expected '${expected}' but got '${actual}'`);
  };
};

assertEquals(missing("123567"), 4, 'Test for missing number')
assertEquals(missing("899091939495"), 92, 'Test for missing number')
assertEquals(missing("9899101102"), 100, 'Test for missing number')
assertEquals(missing("599600601602"), -1, 'Test for missing number')
assertEquals(missing("8990919395"), -1, 'Test for missing number')
assertEquals(missing("998999100010011003"), 1002, 'Test for missing number')
assertEquals(missing("99991000110002"), 10000, 'Test for missing number')
assertEquals(missing("979899100101102"), -1, 'Test for missing number')
assertEquals(missing("900001900002900004900005900006"), 900003, 'Test for missing number')
