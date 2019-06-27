/*

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

*/
function round(number) {
  var num_str = number.toString();
  var nums = num_str.split('.')
  if (nums.length === 1) {
    return parseInt(nums[0]);
  } else {
    if (parseInt(nums[1][0]) >= 5) {
      var new_num = parseInt(nums[0]);
      new_num += 1;
      return new_num;
    } else if (parseInt(nums[1][0]) < 5) {
      var new_num = parseInt(nums[0]);
      return new_num;
    };
  };
};

function ceil(number) {
  if (number > 0) {
    var num_str = number.toString();
    var nums = num_str.split('.')
    var ints = "123456789";
    var ints_arr = ints.split('');

    if (nums.length === 1) {
      return parseInt(nums[0]);
    };

    for (var i = 0; i < ints_arr.length; i++) {
      var integer = ints_arr[i];
      if (nums[1].includes(integer)) {
        var new_num = parseInt(nums[0]) + 1;
        return new_num;
      };
    };

    return parseInt(nums[0]);
  };
};

function floor(number) {
  if (number > 0) {
    var num_str = number.toString();
    var nums = num_str.split('.')

    return parseInt(nums[0]);
  };
};

// console.log(round(0.4));
// console.log(round(7));
// console.log(round(31.000000001));
// console.log(round(2.49999));
// console.log(round(16.5));
// console.log(round(19.9999));

// console.log(ceil(5));
// console.log(ceil(31.000000001));
// console.log(ceil(7.12));
// console.log(ceil(16.5));
// console.log(ceil(2.49999));
// console.log(ceil(19.9999));

// console.log(floor(5));
// console.log(floor(31.000000001));
// console.log(floor(7.12));
// console.log(floor(16.5));
// console.log(floor(2.49999));
// console.log(floor(19.9999));
