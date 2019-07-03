/*

Task
Write a function deNico/de_nico() that accepts two parameters:

key/$key - string consists of unique letters and digits
message/$message - string with encoded message
and decodes the message using the key.

First create a numeric key basing on the provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
Let's decode cseerntiofarmit on using our crazy key.

1 2 3 4 5
---------
c s e e r
n t i o f
a r m i t
  o n
After using the key:

2 3 1 5 4
---------
s e c r e
t i n f o
r m a t i
o n
Notes
The message is never shorter than the key.
Don't forget to remove trailing whitespace after decoding the message

*/

const deNico = (key, m) => {
  var org_key = key.split('');
  var key_arr = key.split('').sort();
  var key_hash = {};
  var string_split = [];

  var i = 0;
  var val = 1;
  while (i < key_arr.length) {
    key_hash[key_arr[i]] = val;
    i += 1;
    val += 1;
  };

  var new_key = org_key.map(function (ele) {
    for (var key in key_hash) {
      if (ele === key) {
        return key_hash[ele];
      };
    };
  });

  var beg = 0;
  var end = org_key.length;
  while (beg < m.length) {
    var element = m.slice(beg, end);
    string_split.push(element)
    beg += org_key.length;
    end += org_key.length;
  };

  var sorted = []

  string_split.forEach(function (element) {
    for (var i = 0; i < new_key.length; i++) {
      var index = new_key[i] - 1;
      var letter = element.charAt(index);
      sorted.push(letter);
    };
  });
  
  return sorted.join('').replace(/\s+$/g, '');
};

console.log(deNico("crazy","cseerntiofarmit on  " ));
console.log(deNico("crazy","cseerntiofarmit on" ));
console.log(deNico("ba","2143658709"));
console.log(deNico("a", "message"));
console.log(deNico("key", "eky"));
