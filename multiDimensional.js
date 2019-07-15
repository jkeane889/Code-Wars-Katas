/*

Sometimes we need to use multiDIMensional arrays (array of arrays).

The goal of this kata is to code a dim function which will create an xD-array and fill it with a default value.

So..

dim( d1 [,d2 [,d3 [... ]]], value )
... will create an array of d1 subarrays of d2 sub-subarrays of d3 sub-sub-subarrays (and so on), with each final item being equal to value.

You may assume:

at least 2 arguments (d1and value) are provided

each d argument will be a positive integer

value argument may be a number, a string, a boolean, ...

If value is a function then the result of this function will be attribued to the item.

##Examples

dim( 3,3,"x" ) // => [['x','x','x'],['x','x','x'],['x','x','x']]

dim( 2,2,2,0 ) // => [[[0,0],[0,0]],[[0,0],[0,0]]]

dim( 3, true ) // => [true,true,true]

var xxx=function(){ return "xX" }
dim( 2,5,xxx ) // => [['xX','xX','xX','xX','xX'],['xX','xX','xX','xX','xX']]

// if function provides different value on each iteration
// then produced subarrays must should be different!
var rnd=function(){ return (~~Math.random()*3) }
dim( 3,2,rnd ) // => (depends on results of rnd)
  // eg: [[0,1],[2,1],[0,0]]

*/
function dim() {
  var args = Array.from(arguments);
  var val = args.pop();
  var d1 = args.pop();
  var xDarr = [];

  for (var x = 0; x < d1; x++) {
    if (typeof val == 'function') {
      xDarr.push(val());
    } else {
      xDarr.push(val);
    };
  };

  if (args.length >= 1) {
    var reversedArg = args.reverse();
    return getMatrix(reversedArg, xDarr);
  } else {

    return xDarr;
  };
};

function getMatrix(arr, item) {
  var dimArr = item;

  console.log("Original dimArr: ", dimArr)

  for (var i = 0; i < arr.length; i++) {
    var finalMatrix = [];
    console.log(arr[i])
    genMatrix(arr[i]);
    dimArr = finalMatrix;

    function genMatrix(num) {
      if (num === 1) {
        return dimArr;
      } else {
        return finalMatrix.push(dimArr, genMatrix(num - 1))
      };
    };

    console.log("Updated dimArr: " + dimArr)
  };

  return dimArr;
};

// console.log(dim( 2,2,2,0 ));
console.log(dim( 3,3,"x" ));
// console.log(dim( 3, true ));

// var xxx=function(){ return "xX" }
// console.log(dim( 2,5,xxx ));

// var rnd=function(){ return (~~Math.random()*3) }
// console.log(dim( 3,2,rnd ));
