/*

Section numbers are strings of dot-separated integers. The highest level sections (chapters) are numbered 1, 2, 3, etc. Second level sections are numbered 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, etc. Next level sections are numbered 1.1.1, 1.1.2, 1.1.2, 1.2.1, 1.2.2, erc. There is no bound on the number of sections a document may have, nor is there any bound on the number of levels.

A section of a certain level may appear directly inside a section several levels higher without the levels between. For example, section 1.0.1 may appear directly under section 1, without there being any level 2 section. Section 1.1 comes after section 1.0.1. Sections with trailing ".0" are considered to be the same as the section with the trailing ".0" truncated. Thus, section 1.0 is the same as section 1, and section 1.2.0.0 is the same as section 1.2.

Write a function cmp(section1, section2) that returns -1, 0, or 1 depending on whether section1 is before, same as, or after section2 respectively.

*/

function cmp(section1,section2) {
  var sect_1 = section1.split(".")
  var sect_2 = section2.split(".")

  var updt_sect1 = sect_1.map(removeLeadZeroes)
  var updt_sect2 = sect_2.map(removeLeadZeroes)

  var final_sect1 = updt_sect1.map(replaceQuotes)
  var final_sect2 = updt_sect2.map(replaceQuotes)

  if (updt_sect1.length === updt_sect2.length) {
    for (var i = 0; i < updt_sect1.length; i++) {
      if (parseInt(updt_sect1[i]) > parseInt(updt_sect2[i])) {
        return 1
      } else if (parseInt(updt_sect1[i]) < parseInt(updt_sect2[i])) {
        return -1
      };
    };
  };

  if (updt_sect1[0] === updt_sect2[0] && checkSubZeroes(final_sect1) === true && checkSubZeroes(final_sect2) === true) {
    return 0;
  };

  for (var i = 0; i < final_sect1.length; i++) {
    for (var j = 0; j < final_sect2.length; j++) {
      if (i === j && final_sect1[i] > final_sect2[j]) {
        return 1
      } else if (i > j && typeof final_sect2[i] === 'undefined') {
        return 1;
      } else if (i === j && final_sect1[i] < final_sect2[j]) {
        return -1;
      } else if (i < j && typeof final_sect1[i] === 'undefined') {
        return -1;
      };
    };
  };

  return 0;
};

function removeLeadZeroes(string) {
  var newStr = string.replace(/^0+/gi, '')
  return newStr;
};

function replaceQuotes(str) {
  if (str === '') {
    return 0
  } else {
    return parseInt(str);
  };
};

function checkSubZeroes(arr) {
  var newArr = arr.slice(1, arr.length);
  var greaterThanZero = newArr.filter(function (element) {
    return element > 0;
  });

  if (greaterThanZero.length === 0) {
    return true
  } else {
    return false
  };
};

console.log(cmp( "1", "2" ))
console.log(cmp( "1.1", "1.2" ))
console.log(cmp( "1.1", "1" ))
console.log(cmp( "1.2.3.4", "1.2.3.4" ))
console.log(cmp( "3", "3.0" ))
console.log(cmp( "3", "3.0.0.0" ))
console.log(cmp( "1.2.1", "1.2.0" ))
console.log(cmp( "3.0.0", "3.1.1" ))
console.log(cmp( "3.0.1", "3.1" ))
console.log(cmp( "1.2.3", "1.02.003" ))
console.log(cmp( "1.20", "1.5" ))
