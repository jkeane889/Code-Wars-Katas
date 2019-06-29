/*

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]

*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  var count = 0;
  var regex1 = /^(:|;)(\)|D)/
  var regex2 = /^(:|;)(\-|\~)(D|\))/
  arr.forEach(function (element) {
    if (element.length === 2) {
      if (regex1.test(element)) {
        count += 1;
      };
    } else if (element.length === 3) {
      if (regex2.test(element)) {
        count += 1;
      };
    };
  });

  return count;
};
