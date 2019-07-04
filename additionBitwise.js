/*

Create an addition function that does not utilize the + or - operators.

Anti-cheat tests
You may not use any of these symbols: +-[].'"`

Moreover, Math, Array, eval, new Function, with and such have been disabled.

*/

function add (x,y) {

  while (y != 0)  {
    var carry = x & y;

    x = x ^ y;
    y = carry << 1;
  };

  return x;
};

console.log(add(2, 3));
