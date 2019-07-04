/*

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

function primeFactors(n) {
  var primes = [];
  findPrimes(n, primes);
  return outputPrimes(primes);
};

function findPrimes(n, arr) {
  var num = 2;

  if (n === 1) return arr;
  while (n % num != 0) {
    num += 1;
  };

  arr.push(num);
  findPrimes(n/num, arr);
};

function outputPrimes(arr) {
  var prime_hash = {};

  for (var i = 0; i < arr.length; i++) {
    if (prime_hash[arr[i]] === undefined) {
      prime_hash[arr[i]] = 1;
    } else {
      prime_hash[arr[i]] += 1;
    };
  };

  var primes_str = "";

  for (var key in prime_hash) {
    var times = parseInt(key);
    var valStr = prime_hash[key].toString();
    if (prime_hash[key] === 1) {
      primes_str += '(' + key + ')';
    } else {
      primes_str += '(' + key + '**' + valStr + ')';
    };
  };

  return primes_str;
};
