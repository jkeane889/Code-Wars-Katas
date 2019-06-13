/*

Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

*/


function looseChange(cents){
  var total_change = 0
  var change = {
    'Nickels': 0,
    'Pennies': 0,
    'Dimes': 0,
    'Quarters': 0
  };

  if (cents < 0 || cents === 0) {
    return change
  };

  if (!Number.isInteger(cents)) {
    var rounded = Math.floor(cents);
    total_change += rounded;
  } else {
    total_change = cents;
  };

  while (total_change > 0) {
    if (total_change - 25 >= 0) {
      change['Quarters']++;
      total_change = total_change - 25;
    } else if (total_change - 10 >= 0) {
      change['Dimes']++;
      total_change = total_change - 10;
    } else if (total_change - 5 >= 0) {
      change['Nickels']++;
      total_change = total_change - 5;
    } else if (total_change - 1 >= 0) {
      change['Pennies']++;
      total_change = total_change - 1;
    };
  };

  return change;
};
