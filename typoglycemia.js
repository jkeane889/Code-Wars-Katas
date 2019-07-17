/*

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:
1) the first and last characters remain in original place for each word
2) characters between the first and last characters must be sorted alphabetically
3) punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions
1) words are seperated by single spaces
2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
5) ignore capitalisation

*/

ScrambleWords = function(str) {
  var splitStr = str.split(' ');
  var scrambledWords = splitStr.map(sortWord);
  if (scrambledWords.length > 1) {
    return scrambledWords.join(' ');
  } else {
    return scrambledWords.join('');
  };
};

function sortWord(word) {
  var specialChars = word.match(/\W/g);

  if (specialChars) {
    var charsHash = {};
    specialChars.forEach(function(ele) {
      charsHash[ele] = word.indexOf(ele)
    });

    var wordArr = word.split('')
    var characters = wordArr.filter(function (ele) {
      if (ele.match(/\w/g)) {
        return ele;
      };
    });

    var firstLetter = characters.shift();
    var lastLetter = characters.pop();
    var alphaSorted = characters.sort()
    alphaSorted.splice(0, 0, firstLetter);
    alphaSorted.splice(alphaSorted.length, 0, lastLetter);

    for (var key in charsHash) {
      alphaSorted.splice(charsHash[key], 0, key);
    };

    var finalSort = alphaSorted.join('');

    return finalSort;
  } else if (word.length === 1) {

    return word;
  } else {

    var firstLetter = word[0];
    var lastLetter = word[word.length - 1];
    var remainWord = word.slice(1, word.length - 1)

    var wordArr = remainWord.split('');
    var alphaSorted = wordArr.sort();
    var finalSort = alphaSorted.join('');

    return firstLetter + finalSort + lastLetter;
  };
};

function assertEqual(actual, expected, testName) {
  if (expected === actual) {
    console.log(`passed`)
  } else {
    console.log(`FAILED [${testname}].  Expected, '${expected}', but got '${actual}'`);
  };
};

assertEqual(ScrambleWords('professionals'), 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted');
assertEqual(ScrambleWords('i'), 'i', 'Must handle single charater words');
assertEqual(ScrambleWords('me'), 'me', 'Must handle 2 charater words')
assertEqual(ScrambleWords('you'), 'you', 'Must handle 3 charater words');
assertEqual(ScrambleWords('card-carrying'), 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started');
assertEqual(ScrambleWords("shan't"), "sahn't", 'Punctuation should remain at the same place as it started');
assertEqual(ScrambleWords('-dcba'), '-dbca', 'Must handle special character at the start');
assertEqual(ScrambleWords('dcba.'), 'dbca.', 'Must handle special character at the end');
assertEqual(ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."), "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence');
