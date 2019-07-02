/*

John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered with non-alpha-numeric characters (except inside phone number and name).

Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number returns a string for this number : "Phone => num, Name => name, Address => adress"

Examples:

s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that, for a few phone numbers, there are many people for a phone number -say nb- , then

return : "Error => Too many people: nb"

or it can happen that the number nb is not in the phone book, in that case

return: "Error => Not found: nb"

You can see other examples in the test cases.

*/


function phone(string, num) {
  var contacts = [];
  var str_arr = string.split("\n");

  str_arr.forEach(function(elem) {
    var nameInfo = nameFind(elem);
    var phoneInfo = phoneFind(elem);
    var addressInfo = addressFind(elem);
    contacts.push([nameInfo, phoneInfo, addressInfo]);
  });

  var verified = 0;
  var count = 0;
  var contact = [];

  contacts.forEach(function(ele) {
    if (ele.includes(num)) {
      count += 1;
      verified += 1;
    };
  });

  if (count > 1) {
    return "Error => Too many people: " + num.toString();
  };

  if (verified != 1) {
    return "Error => Not found: " + num.toString();
  }

  contacts.forEach(function(ele) {
    if (ele.includes(num)) {
      var phoneStr = "Phone => " + ele[1].toString();
      var nameStr = "Name => " + ele[0].toString();
      var addressStr = "Address => " + ele[2].toString();
      contact.push(phoneStr, nameStr, addressStr)
    };
  });

  return contact.join(", ")
};

function addressFind(element) {
  var elem_1 = element.replace(/\W{1,2}(\d{1,2}\-\d{3}\-\d{3}\-\d{4})/, "");
  var elem_2 = elem_1.replace(/^\<\w*\>|\<\w*\s\w*\>|\<\w*\s\w*\s\w*\>|\<\w*\s\w\W|\w*\w*\>/g, "");
  console.log(elem_2)

  elem_2 = elem_2.replace(/[^a-zA-Z0-9.-]/g, " ")
  elem_2 = elem_2.replace(/\s{2,}/g,' ');

  return elem_2.trim();
};

function phoneFind(element) {
  var phoneNum = "";
  var elems_split = element.split(" ");

  elems_split.forEach(function (item) {
    var teleRegex = /^\W{1,2}(\d{1,2}\-\d{3}\-\d{3}\-\d{4})\W*/;
    if (teleRegex.test(item)) {
      phoneNum += item;
    };
  });

  var i = 0;
  var final_num = ""

  while (i < phoneNum.length) {
    var integers = "0123456789-";
    var end = phoneNum.length;
    if (!integers.includes(phoneNum[i])) {
      i += 1;
    } else {
      final_num += phoneNum[i];
      i += 1;
    };
  };

  return final_num;
};

function nameFind(element) {
  var pos_1 = element.indexOf("<");
  var pos_2 = element.indexOf(">");
  var contact = element.slice(pos_1 + 1, pos_2);

  return contact;
};

const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
+ "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
+ "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
+ "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
+ "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
+ "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
+ "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
+ "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
+ "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
+ "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
+ "<P Salinge> Main Street, +1-098-512-2222, Denve\n"

console.log(phone(dr, "1-541-914-3010"));
// console.log(phone(dr, "1-921-512-2222"));
// console.log(phone(dr, "1-908-512-2222"));
// console.log(phone(dr, "1-908-512-2222"));
// console.log(phone(dr, "1-098-512-2222"));
// console.log(phone(dr, "5-555-555-5555"));
