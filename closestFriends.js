/*  Closest friends
INFO:
Timmy spends a lot of time talking on the phone and he would like to see which friends he talks to the most.

TASK:
Complete the function closestFriends that takes an array history as input.

Each element of history is a string in the following format "(000) 000-0000 00:00:00" (where the first part "(000) 000-0000" represents the phone number Timmy talked to and the second "00:00:00" is the call duration (hours : minutes : seconds).

Your job is to find the three contacts Timmy talked to the most and return their names in an array sorted by total call durations.

A global variable phonebook is preloaded and contains all the contacts and their phone numbers.

I - array of phone number strings in a specific format ("(000) 000-0000 00:00:00")
O - a sorted array with in descending order by friends caller spoke to most and then least.
E - n/a
C - n/a

*/

var phonebook = { 'Alfred': '(210) 013-1040',
  'Rob': '(424) 012-2013',
  'Jason': '(210) 011-0987',
  'Betty': '(127) 042-3341',
  'Ewa': '(424) 009-3030',
  'Bella': '(210) 011-5010',
  'Jane': '(424) 013-1032',
  'Ray': '(123) 013-7743',
  'Mike': '(127) 011-6751',
  'Jonathan': '(161) 022-7510',
  'Melissa': '(161) 021-6210',
  'John': '(110) 010-2689',
  'Jack': '(127) 018-6512',
  'Michael': '(110) 012-5135',
  'Shane': '(424) 017-4123',
  'Monica': '(141) 011-6123',
  'Rudolf': '(141) 012-6691' };

var history = ["(123) 013-7743 00:49:47", "(110) 010-2689 01:17:40",
"(110) 012-5135 00:16:54", "(161) 022-7510 00:16:24", "(127) 011-6751 01:01:53", "(424) 012-2013 01:46:29", "(123) 013-7743 00:59:13", "(127) 042-3341 04:32:45"];

function closestFriends(arr) {
  // use phone number portion of each string to look up the key value in the global phonebook
  // then compare each person's call duration using split and compare function

  var numbersArr = [];

  arr.forEach(function (element) {
    var newArr = [];
    var phone = element.slice(0, 14);
    var duration = element.slice(15, element.length);
    var eleArr = duration.split(':');
    eleArr = eleArr.join('')
    newArr.push(phone, eleArr);
    numbersArr.push(newArr);
  });

  console.log(numbersArr)

  var updatedNumArr = [];

  numbersArr.forEach(function (value1, index1) {
    var phoneInfo = [];
    var phoneNum = value1[0];
    var callDur = parseInt(value1[1]);
    numbersArr.forEach(function (value2, index2) {
      var samePhone = value2[0];
      var addtlDur = parseInt(value2[1]);
      if ((phoneNum === samePhone) && (index2 > index1)) {
        callDur += addtlDur;
      };
    });

    phoneInfo.push(phoneNum, callDur);
    updatedNumArr.push(phoneInfo);
  });

  console.log(updatedNumArr);

  updatedNumArr.sort(function(a, b) {
    return b[1] - a[1];
  });

  console.log(updatedNumArr);

  // console.log(numbersArr)

  // for (var key1 in phonebook) {
  //   for (var key2 in durationObj) {
  //     if (phonebook[key1] === key2) {
  //       durationObj[key1] = durationObj[key2];
  //       delete durationObj[key2];
  //     };
  //   };
  // };

  // var durationArr = [];

  // for (var key in durationObj) {
  //   var element = durationObj[key];
  //   var eleArr = element.split(':')
  //   eleArr = eleArr.join('')
  //   durationArr.push(eleArr);
  // };

  // console.log(durationArr)

  // durationArr.sort(function(a, b) {
  //   return b - a;
  // });

  // var updatedDuration = [];

  // durationArr.forEach(function (item) {
  //   var phoneStr = '';
  //   for (var i = 0; i < item.length; i += 2) {
  //     phoneStr += item[i] + item[i + 1] + ':';
  //   };
  //   var phoneNum = phoneStr.slice(0, phoneStr.length -1);
  //   updatedDuration.push(phoneNum);
  // });

  // console.log(updatedDuration)

  // var sortedObj = {};
  // updatedDuration.forEach(function (value) {
  //   for (var key in durationObj) {
  //     if (value === durationObj[key]) {
  //       sortedObj[key] = value;
  //     };
  //   };
  // });

  // var finalArr = [];

  // for (var key in sortedObj) {
  //   finalArr.push(key);
  // };

  // return finalArr.slice(0, 3);
};

console.log(closestFriends(history));
