/*

  Longest Palindrome

Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Examples

Input  Output

string:
"aibohphobia"  "aibohphobia"

string:
"My dad is a racecar athlete"  "a racecar a"

I - string of words that could contain palindromes
O - longest palindrome in the sentence
E - n/a
C - missing a palindrome that contains spaces

*/

function findLongestPal(sentence) {
 //  create an an array to store all characters of sentence
  // create longest pal variable
  // start with a for loop to iterate the length of sentence array
  // embed another for loop inside the above for loop to iterate over sentence array
  // grab each char, store in a variable
  // reverse it, test it against char, if it is a palindrome or not
  // then keep going through sentence array, reverseing and storing and testing for palindromes

  var longestPal = '';

  for (var j = 0; j <= sentence.length; j++) {
    for (var i = 0; i <= sentence.length; i++) {
      if (i > j) {
        var potPalindrome = sentence.substring(i, j);
        if ((isPalindrome(potPalindrome)) && (potPalindrome.length > longestPal.length)) {
          longestPal = potPalindrome;
        };
      };
    };
  };

  return longestPal;
};

function isPalindrome(word) {
  // reversing the word and storing in a variable
  var reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  };
};

console.log(findLongestPal("My dad is a racecar athlete"))
