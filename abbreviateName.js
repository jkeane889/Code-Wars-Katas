/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/

function abbrevName(name){
  var nameArr = name.split(" ");
  var finalName = nameArr[0][0].toUpperCase() + "." + nameArr[1][0].toUpperCase();
  return finalName
};

console.log(abbrevName("Sam Harris"))

/* Best Practice:

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

*/
