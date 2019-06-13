/*

In a factory a printer prints labels for boxes. The printer uses colors which, for the sake of simplicity, are named with letters from a to z (except letters u, w, x or z that are for errors).

The colors used by the printer are recorded in a control string. For example a control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a... and so on.

Sometimes there are problems: lack of colors, technical malfunction and a control string is produced e.g. uuaaaxbbbbyyhwawiwjjjwwxym where errors are reported with letters u, w, x or z.

You have to write a function hist which given a string will output the errors as a string representing a histogram of the encountered errors.

Format of the output string:

letter (error letters are sorted in alphabetical order) in a field of 2 characters, a white space, number of error for that letter in a field of 6, as many "*" as the number of errors for that letter and "\r".

The string has a length greater or equal to one and contains only letters from a to z.

*/

function hist(s) {
  if (s.length <= 0) {
    return ""
  }

  var error_hash_count = {};
  var count;

  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if (char === "u") {
      // Get the count for the character; if no count exists, will be undefined
      count = error_hash_count["u"];
      // If key exists, store it plus one; if not, store its value as one.
      error_hash_count["u"] = count ? count + 1 : 1;
    } else if (char === "w") {
      count = error_hash_count["w"];
      error_hash_count["w"] = count ? count + 1 : 1;
    } else if (char === "x") {
      count = error_hash_count["x"];
      error_hash_count["x"] = count ? count + 1 : 1;
    } else if (char === "z") {
      count = error_hash_count["z"];
      error_hash_count["z"] = count ? count + 1 : 1;
    };
  };

  var err_arr = []

  for (var index in error_hash_count) {
    err_arr.push(reportError(index, error_hash_count[index]));
  };

  if (err_arr.length === 0) {
    return ""
  } else {
    var err_string = ""
    var sorted_errors = err_arr.sort()
    var last_element = sorted_errors.pop()
    sorted_errors.push(last_element.replace(/\r?\n|\r/g, ""));
    sorted_errors.forEach(function (element) {
      err_string += element;
    });

    return err_string;
  };
};

function reportError(key, value) {
  var err_string = ""

  err_string += key + "  ";
  err_string += value + "     " + "*".repeat(value) + "\r";

  return err_string;
};

/* Best Practice:




*/
