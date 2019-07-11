/*

Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

*/

/*

O - string with each word starting with a vowel ending in 'ay.' If word starts with vowel, word will end with 'way'. Word will retain punction where it is, and only shift characters.
I - string with multiple words, numbers and punctuation.
C - shifting characters with punctuation, ignoring numbers
E - n/a

*/

function translate(sentence) {
  // split sentence on spaces into new array
  // create helper function to change word into pig latin
  // call helper function on each element in new string array
  // join and return split array
  var sentArr = sentence.split(' ');
  var pigArr = sentArr.map(pigWord);
  return pigArr.join(' ')
};

function pigWord(str) {
  var uppercase = null;
  if (str[0] === str[0].toUpperCase()) {
    var uppercase = true;
  } else {
    var uppercase = false;
  };

  var str = str.toLowerCase();
  var vowels = 'aeiouAEIOU';
  if (str.match(/\W+/g)) {
    var nonWord = str.match(/\W+/g);
    var punc = nonWord[0];
  } else {
    var punc = '';
  };

  var word = str.match(/\w+/g);
  var chars = word[0];

  if (vowels.includes(chars[0])) {
    if (uppercase === true) {
      var firstChar = chars[0].toUpperCase();
      var remainChars = chars.slice(1, chars.length) + 'way';
      return firstChar + remainChars + punc;
    } else {
      chars = chars + 'way';
      return chars + punc;
    };
  };

  var i = 0;

  while (i < chars.length) {
    if (!vowels.includes(chars[i])) {
      chars = chars.slice(1, chars.length) + chars[0];
      i += 1;
      i -= 1;
    } else {
      if (uppercase === true) {
        var firstChar = chars[0].toUpperCase();
        var remainChars = chars.slice(1, chars.length) + 'ay';
        return firstChar + remainChars + punc;
      } else {
        chars = chars + 'ay';
        return chars + punc;
      };
    };
  };
};

// ASSERTION FUNCTION(S) TO BE USED

function assertEqual(actual, expected, testName) {
  if (expected === actual) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}]. Expected "${expected}", but got "${actual}"`);
  };
};

var sentence0 ='hello';
var sentence1 ='hello world';
var sentence2 ='Hello World';
var sentence3 ='Pizza? Yes Please!!';
var sentence4 ='How are you?';

assertEqual(translate(sentence0), 'ellohay', 'translate word.');
assertEqual(translate(sentence1), 'ellohay orldway', 'translate word.');
assertEqual(translate(sentence2), 'Ellohay Orldway', 'translate word.');
assertEqual(translate(sentence3), 'Izzapay? Esyay Easeplay!!', 'translate word.');
assertEqual(translate(sentence4), 'Owhay areway ouyay?', 'translate word.');
