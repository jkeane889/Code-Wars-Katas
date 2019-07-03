/*

Hey You !
Sort these integers for me ...

By name ...

Do it now !

Input
Range is 0-999

There may be duplicates

The array may be empty

*/

function sortByName(ary) {
  var num_dict = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

  var word_nums = ary.map(function (element) {
    for (var key in num_dict) {
      if (element.toString().length > 2) {
        var eleStr = element.toString().split('');
        if (eleStr[1] === '0' && eleStr[2] === '0') {
          var final_num = num_dict[eleStr[0]] + ' hundred'
          return [final_num, element];
        } else if (eleStr[2] === '0') {
          var num_one = num_dict[eleStr[0]] + ' hundred ';
          var digit_two = eleStr[1] + '0';
          var num_two = num_dict[digit_two];
          var final_num = num_one + num_two;
          return [final_num, element];
        } else if (eleStr[1] === '1') {
          var num_one = num_dict[eleStr[0]] + ' hundred ';
          var digit_two = eleStr[1] + eleStr[2];
          var num_two = num_dict[digit_two];
          var final_num = num_one + num_two;
          return [final_num, element];
        } else {
          var num_one = num_dict[eleStr[0]] + ' hundred ';
          if (eleStr[1] !== '0') {
            var digit_two = eleStr[1] + '0';
            var num_two = num_dict[digit_two];
            var digit_three = eleStr[2];
            var num_three = num_dict[digit_three];
            var final_num = num_one + num_two + ' ' + num_three;
            return [final_num, element];
          } else {
            var digit_three = eleStr[2];
            var num_three = num_dict[digit_three];
            var final_num = num_one + num_three;
            return [final_num, element];
          }
        };
      } else if (element.toString().length > 1) {
        var eleStr = element.toString().split('');
        if (eleStr[1] === '0') {
          var digit_one = eleStr[0] + '0';
          var final_num = num_dict[digit_one];
          return [final_num, element];
        } else if (eleStr[0] !== '1') {
          var digit_one = eleStr[0] + '0';
          var num_one = num_dict[digit_one];
          var digit_two = eleStr[1];
          var num_two = num_dict[digit_two];
          var final_num = num_one + num_two;
          return [final_num, element];
        } else {
          var eleStr = element.toString();
          var final_num = num_dict[eleStr];
          return [final_num, element];
        };
      } else {
        var eleStr = element.toString();
        var final_num = num_dict[eleStr];
        return [final_num, element];
      };
    };
  });

  // console.log(word_nums)

  function comparator(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  };

  word_nums = word_nums.sort(comparator);

  // console.log(word_nums)

  var final_nums = word_nums.map(function (elem) {
    return elem[1];
  });

  return final_nums;
};
