function decompose(n) {
  var goal = 0;
  var result = [n];

  while (result) {
    var current = result.pop();
    var goal = current ** 2;
    for (var i = current - 1; i > 0; i--) {
      if (goal - (i ** 2) >= 0) {
        goal -= i ** 2;
        result.push(i);
        if (goal === 0) {
          return result.sort(function(a, b){return a - b});
        };
      };
    };
  };
  return null;
};
