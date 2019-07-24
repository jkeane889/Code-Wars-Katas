/*

You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

Your function should return the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

*/

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function calculateAveragePricePerDesigner(inventory) {
  var newObj = {};
  var designersArr = [];

  inventory.forEach(function (element) {
    var avgArr = [];
    var designerObj = {};
    designerObj['name'] = element['name'];

    var shoesObj = element['shoes'];
    for (var i = 0; i < shoesObj.length; i++) {
      avgArr.push(shoesObj[i]['price']);
    };

    var avg = avgArr.reduce(function (total, ele) {
      return total + ele;
    });

    designerObj['averagePrice'] = avg / avgArr.length;
    designersArr.push(designerObj);
  });

  newObj['designers'] = designersArr;

  return newObj;
};

var expectedArr = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};


// ASSERT TEST Function

function assertObjectsEqual(actual, expected, testName) {
    var bool = false;
    var actualArr = [];
    var expectedArr = [];
    var actualCount = 0;
    var expectedCount = 0;

    for (var key in actual) {
        actualArr.push(actual[key]);
        actualCount += 1;
    };

    for (var key in expected) {
        expectedArr.push(expected[key]);
        expectedCount += 1;
    };

    for (var i = 0; i < actualArr.length; i++) {
      if (JSON.stringify(actualArr[i]) === JSON.stringify(expectedArr[i])) {
        bool = true;
      };
    };

    if (actualCount !== expectedCount) {
        bool = true;
    };

    if (bool === true) {
      console.log(`passed`)
    } else {
      console.log(`FAILED [${testName}] Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
    };
};

assertObjectsEqual(calculateAveragePricePerDesigner(currentInventory), expectedArr, "Objects are equal");
