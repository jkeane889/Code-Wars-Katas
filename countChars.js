/*

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*/

function duplicateCount(text){
  var counts = {}
  var count;

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i).toLowerCase();
    // Get the count for this character; if not defined, will return 'undefined'
    count = counts[char];
    // If char exists, store that count + 1; else, have it equal to 1.
    counts[char] = count ? count + 1 : 1
  };

  var total = 0

  for (var key in counts) {
    if (counts[key] > 1) {
      total += 1;
    };
  };

  return total;
};
