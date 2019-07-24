/*

We have 3 equations with 3 unknowns x, y, and z and we are to solve for these unknowns.

Equations 4x -3y +z = -10, 2x +y +3z = 0, and -x +2y -5z = 17 will be passed in as an array of [[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]] and the result should be returned as an array like [1, 4, -2] (i.e. [x, y, z]).

Note: In C++ do not use new or malloc to allocate memory for the returned variable as allocated memory will not be freed in the Test Cases. Setting the variable as static will do.

*/

function solveEq(eq) {

  var equationOne = eq[0];
  var equationTwo = eq[1];
  var equationThree = eq[2];

  var zObj = zee(equationOne);
  var yObj = yiuh(zObj, equationTwo);
  var zObj = zee(equationOne);

  if (equationOne[2] === 0) {
    var x = xee(zObj, yObj, equationThree, equationOne[3]);
    var y = (x * yObj['x']) + yObj['m'];
    var z = (x * zObj['x']) + (y * zObj['y']) + zObj['m'];

    var finalArr = [];
    finalArr.push(Math.round(x), Math.round(y), Math.round(z));

    return finalArr;
  } else {
    var x = xee(zObj, yObj, equationThree);
    var y = (x * yObj['x']) + yObj['m'];
    var z = (x * zObj['x']) + (y * zObj['y']) + zObj['m'];

    var finalArr = [];
    finalArr.push(Math.round(x), Math.round(y), Math.round(z));

    return finalArr;
  };
};

function zee(equArr) {
  // 3, 2, 0, 7
  // 3x + 2y + 0z = 7
  // -3x - 2y = 7
  //
  var zHash = {};

  if (equArr[2] === 0) {
    equArr[0] === 0 ? zHash['x'] = 0 : zHash['x'] = equArr[0] * -1;
    equArr[1] === 0 ? zHash['y'] = 0 : zHash['y'] = equArr[1] * -1;

    for (var key in zHash) {
      if (equArr[2] === 0) {
        zHash[key] = zHash[key] / 1;
      } else {
        zHash[key] = zHash[key] / equArr[2];
      };
    };

    return zHash;
  } else {
    equArr[0] === 0 ? zHash['x'] = 0 : zHash['x'] = equArr[0] * -1;
    equArr[1] === 0 ? zHash['y'] = 0 : zHash['y'] = equArr[1] * -1;
    zHash['m'] = equArr[3];

    for (var key in zHash) {
      if (equArr[2] === 0) {
        zHash[key] = zHash[key] / 1;
      } else {
        zHash[key] = zHash[key] / equArr[2];
      };
    };

    return zHash;
  };
};

function yiuh(zArr, equArr) {
  // [-4, 0, 3, -6]
  // -4x + 0y + 3z = -6
  // -4x + 0y - 9x - 6y = -6
  // -13x - 6y = -6
  // -6y = 13x - 6
  // y = -2.167x + 1

  var yHash = {};
  var zCopy = zArr;

  for (var key in zCopy) {
    if (equArr[2] === 0) {
      zCopy[key] = 0;
    } else {
      zCopy[key] = zCopy[key] * equArr[2];
    };
  };

  var x;
  var y;
  var m;

  x = zCopy['x'] + equArr[0];
  y = zCopy['y'] + equArr[1];
  if (zCopy['m'] != undefined) {
    equArr[3] < 1 ? m = zCopy['m'] + equArr[3] : m = zCopy['m'] + (-1 * + equArr[3]);
  } else {
    equArr[3] < 1 ? m = equArr[3] : m = (-1 * + equArr[3])
  };

  var newY = y / y;
  var newX = (x / y);
  var newM = (m / y);
  yHash['x'] = newX;
  yHash['m'] = newM;

  return yHash
};

function xee(...args) {
  var argArr = Array.from(args)
  var xHash = {};
  var zArr = argArr[0];
  var yArr = argArr[1];
  var equArr = argArr[2];
  var count = 0;

  for (var key in argArr[0]) {
    count += 1;
  };

  if (count === 2) {
    var m = argArr[3];
    console.log(zArr)
    console.log(yArr)
    // 7 = -3x -2y
    // y = 2.17x + 1
    // 7 = -3x -2(2.17x + 1)
    // 7 = -3x - 4.3x - 2

    var yOne = {};
    yOne['x'] = zArr['x'] + zArr['y'] * yArr['x'];
    yOne['m'] = zArr['y'] * yArr['m'];
    console.log(yOne)

    var x = (m + (-1 * yOne['m'])) / yOne['x'];
    console.log(x)






    // if (equArr[0] !== 0) {
    //   xHash['x'] = equArr[0];
    // };

    // xHash['y'] = equArr[1];
    // xHash['z'] = equArr[2];
    // xHash['m'] = equArr[3];

    // console.log(xHash)






  };

  // if (count > 2) {
  //   var zArr = argArr[0];
  //   var yArr = argArr[1];
  //   var equArr = argArr[2];

  //   if (equArr[0] === 0) {
  //     xHash['x'] = 1;
  //   } else {
  //     xHash['x'] = (equArr[0] / equArr[0]);
  //   };

  //   xHash['y'] = (equArr[1] * -1) / xHash['x'];
  //   xHash['z'] = (equArr[2] * -1) / xHash['x'];
  //   xHash['m'] = (equArr[3]) / xHash['x'];

  //   var yOne = {};
  //   yOne['x'] = yArr['x'] * xHash['y'];
  //   yOne['m'] = yArr['m'] * xHash['y'];

  //   var yTwo = {};
  //   yTwo['x'] = yArr['x'] * zArr['y'];
  //   yTwo['m'] = yArr['m'] * zArr['y'];

  //   var newX = {};
  //   newX['x'] = ((zArr['x'] + yTwo['x']) * xHash['z']) + yOne['x'];
  //   newX['m'] = ((zArr['m'] + yTwo['m']) * xHash['z']) + yOne['m'] + xHash['m'];

  //   newX['x'] -= 1;

  //   var finalX =  newX['x'] / (newX['m'] * -1);

  //   return finalX;
  // };
};


// console.log(solveEq([[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]]));
// console.log(solveEq([[2, 1, 3, 10], [-3, -2, 7, 5], [3, 3, -4, 7]]));
console.log(solveEq([[3, 2, 0, 7], [-4, 0, 3, -6], [0, -2, -6, -10]]));
// console.log(solveEq([[4, 2, -5, -21], [2, -2, 1, 7], [4, 3, -1, -1]]));
// console.log(solveEq([[1, 1, 1, 5], [2, 2, 3, 14], [2, -3, 2, -5]]));

// ASSERT TEST FUNCTION

function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testname}]. Expected "${expected}", but instead got "${actual}""`);
  };
};

// assertEquals(solveEq([[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]]), [1, 4, -2]);
// assertEquals(solveEq([[2, 1, 3, 10], [-3, -2, 7, 5], [3, 3, -4, 7]]), [-1, 6, 2]);
// assertEquals(solveEq([[3, 2, 0, 7], [-4, 0, 3, -6], [0, -2, -6, -10]]), [3, -1, 2]);
// assertEquals(solveEq([[4, 2, -5, -21], [2, -2, 1, 7], [4, 3, -1, -1]]), [1, 0, 5]);
// assertEquals(solveEq([[1, 1, 1, 5], [2, 2, 3, 14], [2, -3, 2, -5]]), [-2, 3, 4]);
