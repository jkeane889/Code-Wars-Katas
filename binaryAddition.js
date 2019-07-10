/*

This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

*/

/*  DECIDED TO ATTEMPT TO SOLVE USING BITWISE OPERATIONS */

const BigNumber = require('bignumber.js')

function multiply(a, b) {
  // first convert a and b into large decimal numbers using BigNumber lib
  var w = new BigNumber(a, 10);
  var x = new BigNumber(b, 10);

  // then convert w & x to strings
  var wStr = w.toString(2);
  var xStr = x.toString(2);

  // pass strings into digitgroup
  var y1 = digitgroup(wStr, 8, " ");
  var y2 = digitgroup(xStr, 8, " ");

  return multiplyAndAdd(y1, y2);
};

function digitgroup(x, n, d) {
 if (x == "N/A") return x;
 // split if numbers are decimals
 var x0 = x.split(".")[0];
 var x1 = x.split(".")[1];
 var y = "";
 var x0head = "";
 var regex = new RegExp("(.{"+n+"})","g");
 if ( x0!="" && x0 != undefined) {
   // test if element is negative
   if (x0[0] == "-") {
     y = "-";
     x0 = x0.substring(1, x0.length);
    };
    // take a substring of the entire element
    x0head = x0.substring(0, x0.length%n);
    y += x0head;
    // slice xo into bits of 8
    x0 = x0.substring(x0.length%n, x0.length);
    x0 = x0.replace(regex, "$1 ");
    x0 = x0.substring(0, x0.length - 1);
    if (x0head != "" && x0 != "") y += d;
    y += x0;
  };
  if (x1 != "" && x1 != undefined) {
    y += ".";
    y += x1.replace(regex, "$1");
  };

  // remove whitespaces from result
  return y.replace(/\s/g, "");
};

function multiplyAndAdd(a, b) {
  var partials = [];

  var multiplier = (a.length - 1);
  var multiplicand = (b.length - 1);
  var zero = 0;

  for (var i = multiplier; i >= 0; i--) {
    // take first binary number of multiplier
    var plierNum = parseInt(a[i]);
    var result = "";
    for (var j = multiplicand; j >= 0; j--) {
      // for each number of the multiplier, test to see if multiplicand binary number is either 1 or 0.
      var candNum = parseInt(b[j]);
      if (candNum === 0 && plierNum === 0) {
        result = "0" + result;
      } else if (candNum === 0 || plierNum === 0) {
        result = "0" + result;
      } else {
        result = "1" + result;
      };
    };
    // for each new partial sum of binary multiplication, add a zero to each new partial sum
    result = result + ("0").repeat(zero);
    // increase the amount of zeroes added each time we get to the next multiplier
    zero += 1;
    // push our result into our partials array - we will add these together later in the program
    partials.push(result);
  };

  // here we want each partial to have the same number of binary numbers as the longest element for addition/subtraction.
  var newPartials = partials.map(function (element) {
    var zeroLen = partials[partials.length - 1].length;
    if (element.length <= zeroLen) {
      var zeroesAdd = zeroLen - element.length;
      element = ("0").repeat(zeroesAdd) + element;
      return element
    };
  });

  var result = [];
  result.push(newPartials[0]);
  var partialSum = result[result.length - 1];

  for (var i = 1; i < newPartials.length; i++) {
    // add the first partialSum with the next element in the newPartials array, to get the resulting binary element
    var nextSum = addBinary(partialSum, newPartials[i]);
    result.push(nextSum);
    // Update last element in result array to be the most recent sum of binary addition
    partialSum = result[result.length - 1]
  };

  return convertToDecimal(partialSum);
};

function convertToDecimal(bin) {
  var x = new BigNumber(bin, 2);
  var xx = x.toString(10);

  return xx
};

function addBinary(a, b){
  let sum = '';
  let carry = '';

  for (var i = a.length - 1; i >= 0; i--) {
    if (i == a.length-1){
      // Access the last elements in our binary numbers
      const halfAdd1 = halfAdder(a[i],b[i]);
      sum = halfAdd1[0]+sum;
      carry = halfAdd1[1];
    } else{
      //full add the rest
      const fullAdd = fullAdder(a[i],b[i],carry);
      sum = fullAdd[0]+sum;
      carry = fullAdd[1];
    }
  }

  return carry ? carry + sum: sum;
};

function halfAdder(a, b) {
  const sum = xor(a,b);
  const carry = and(a,b);
  return [sum, carry];
};

function fullAdder(a, b, carry) {
  halfAdd = halfAdder(a,b);
  // Rule 1, if
  const sum = xor(carry, halfAdd[0]);
  carry = and(carry, halfAdd[0]);
  carry = or(carry, halfAdd[1]);
  return [sum, carry];
};

//Logic Gates
// Function as the rules of binary addition.
function xor(a, b){return (a === b ? 0 : 1);} // when XOR is performed on a pair of bits, it returns 1 if the bits are different.
function and(a, b){return a == 1 && b == 1 ? 1 : 0;} // when AND is performed on a pair of bits, returns 1 ONLY if both bits are 1.
function or(a, b){return (a || b);} // when OR is performed on a pair of bits, returns 1 if one of the bits is one.
