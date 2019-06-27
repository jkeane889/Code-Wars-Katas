/*

Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

*/

function mix(s1, s2) {
  var combined = getFrequency(s1, s2);
  var final = [];

  for (var key in combined) {
    // If item does not exist in position 1 in array, push item 2
    if (!combined[key][0]) {
      final.push([2, combined[key][1]]);
      // If item does not exist in position 2 in array, push item 1
    } else if (!combined[key][1]) {
      final.push([1, combined[key][0]]);
    } else if (combined[key][0].length > combined[key][1].length) {
      final.push([1, combined[key][0]]);
    } else if (combined[key][1].length > combined[key][0].length) {
      final.push([2, combined[key][1]]);
    } else {
      // If both elements' lengths are equal, push element at pos 1
      final.push(["=", combined[key][0]]);
    };
  };

  final.sort(function(a, b) {
    var aLength = a[1].length;
    var bLength = b[1].length;

    if (aLength > bLength) {
      // Favor more letters and instances of one word having more
      // letters over the other
      return -1;
    } else if (aLength < bLength) {
      return 1;
    } else if (aLength === bLength) {
      if ('=' !== a[0] && '=' === b[0]) {
        return -1;
      } else if ('=' !== b[0] && '=' === a[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      } else if (b[0] < a[0]) {
        return 1;
      };
      if (a[1].charCodeAt(0) < b[1].charCodeAt(0)) {
        return -1;
      } else if (a[1].charCodeAt(0) > b[1].charCodeAt(0)) {
        return 1;
      } else {
        return 0;
      };
    };
  });

  return final.map(function(a) {
    return a[0] + ':' + a[1];
  }).join('/');
};

function getFrequency(str1, str2) {
  var alpha = "abcdefghijklmnopqrstuvwxyz".split('');
  var grouped_arr = [];

  for (var i = 0; i < alpha.length; i++) {
    var regEx = new RegExp(alpha[i], 'g');

    var found_one = str1.match(regEx);

    if (found_one && found_one.length > 1) {
      if ( ! grouped_arr[i]) {
        grouped_arr[i] = [];
      };
      grouped_arr[i][0] = found_one.join('');
    };

    var found_two = str2.match(regEx);

    if (found_two && found_two.length > 1) {
      if ( ! grouped_arr[i]) {
        grouped_arr[i] = [];
      };
      grouped_arr[i][1] = found_two.join('');
    };
  };

  return grouped_arr;
};

console.log(mix("looping is fun but dangerous", "less dangerous than coding"));
