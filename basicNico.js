/*

Task
Write a function nico/nico() that accepts two parameters:

key/$key - string consists of unique letters and digits
message/$message - string to encode
and encodes the message using the key.

First create a numeric key basing on a provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
Let's encode secretinformation using our crazy key.

2 3 1 5 4
---------
s e c r e
t i n f o
r m a t i
o n
After using the key:

1 2 3 4 5
---------
c s e e r
n t i o f
a r m i t
  o n
Notes
The message is never shorter than the key.

Examples
nico("crazy", "secretinformation") => "cseerntiofarmit on  "
nico("abc", "abcd") => "abcd  "
nico("ba", "1234567890") => "2143658709"
nico("key", "key") => "eky"
Check the test cases for more samples.

*/

function nico (key, message) {
  var regex = /\d/g.test(key);
  var keyOrder = {};
  var encrypt = [];
  var messageArr = [];

  if (regex) {
    var keyArr = key.split('');
    var intArr = [];
    var charArr = [];

    for (var i = 0; i < key.length; i++) {
      keyOrder[key[i]] = keyArr.indexOf(key[i]);
    };

    var keys = Object.keys(keyOrder);
    keys.forEach(function (element) {
      if (element.match(/\d/g)) {
        intArr.push(element);
      } else {
        charArr.push(element)
      };
    });

    charArr.forEach(function (char) {
      charArr.sort();
    });

    var updatedHash = {};
    var updatedKeys = intArr.concat(charArr);

    for (var i = 0; i < updatedKeys.length; i++) {
      updatedHash[updatedKeys[i]] = keyOrder[updatedKeys[i]]
    };

    for (key in updatedHash) {
      encrypt.push(updatedHash[key]);
    };

    for (var i = 0; i < message.length; i += encrypt.length) {
      var string = message.slice(i, i + encrypt.length);
      if (string.length !== encrypt.length) {
        var noOfSpaces = encrypt.length - string.length;
        string += ' '.repeat(noOfSpaces);
        messageArr.push(string);
      } else {
        messageArr.push(string);
      };
    };

    var scrambled = '';

    messageArr.forEach(function (element) {
      var i = 0;
      while (i < encrypt.length) {
        var charIndx = encrypt[i];
        scrambled += element.charAt(charIndx);
        i += 1;
      };
    });

    return scrambled;
  } else {
    var keyArr = key.split('').sort();

    for (var i = 0; i < key.length; i++) {
      keyOrder[key[i]] = keyArr.indexOf(key[i]);
    };

    for (var key in keyOrder) {
      encrypt.push(keyOrder[key]);
    };

    var messageArr = [];

    for (var i = 0; i < message.length; i += encrypt.length) {
      var string = message.slice(i, i + encrypt.length);
      if (string.length !== encrypt.length) {
        var noOfSpaces = encrypt.length - string.length;
        string += ' '.repeat(noOfSpaces);
        messageArr.push(string);
      } else {
        messageArr.push(string);
      };
    };

    var scrambled = '';

    messageArr.forEach(function (element) {
      var i = 0;
      while (i < encrypt.length) {
        var charIndx = encrypt.indexOf(i);
        scrambled += element.charAt(charIndx);
        i += 1;
      };
    });

    return scrambled;
  };
};
