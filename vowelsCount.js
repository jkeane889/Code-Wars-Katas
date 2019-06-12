/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  var vowelsCount = 0;
  var vowels = "aeiou"
  var str_arr = str.split("")

  str_arr.forEach(function(element) {
    if (vowels.includes(element)) {
      vowelsCount += 1;
    };
  });

  return vowelsCount;
};

/* Best Practice

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

*/
