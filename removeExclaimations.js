/*

Remove n exclamation marks in the sentence from left to right. n is positive integer.

*/

function remove(s,n){
  var tally = n; // 100
  var strArr = s.split("") // ["H", "i", "!", "!", "!"]
  var exclaimCount = 0
  for (var i = 0; i < strArr.length; i++) {
    if(strArr[i] === "!") {
      exclaimCount += 1
    };
  };

  var j = 0;
  while (exclaimCount > 0 && tally > 0) {
    var currentIndex = j % strArr.length
    if (strArr[currentIndex] === "!") {
      strArr[currentIndex] = "";
      exclaimCount -= 1;
      tally -= 1;
      j += 1;
    } else {
      j += 1;
    };
  };

  return strArr.join("")
};

/* Best Practice:

function remove(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;
}

*/
