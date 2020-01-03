/*
    In this kata, you will be given a string of text and valid parentheses, such as "h(el)lo". You must return the string, with only the text inside parentheses reversed, so "h(el)lo" becomes "h(le)lo". However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, so it faces the original direction (parentheses included). Text like "h((el))l)o" becomes "'h(l(el))o'". This pattern should repeat for however many layers of parentheses.

    For example:

    reverseInParens("h(el)lo") == "h(le)lo");
    reverseInParens("a ((d e) c b)") == "a (b c (d e))");
    reverseInParens("one (two (three) four)") == "one (ruof (three) owt)");
    reverseInParens("one (ruof ((rht)ee) owt)") == "one (two ((thr)ee) four)");
    Input parentheses will always be valid (i.e. you will never get "(()").
*/
function reverseInParens(text) {
    // Input - string of text that contains parantheses
    // Output - reversed text inside of parantheses
    // Constraints - n/a
    // Edge Cases - n/a
    // create global reverse string

    let reversedString = '';

    const reverseWitStack = (input, direction) => {
      let stack = [];

      for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
          stack.push(input[i]);
          if (direction === true) {
            direction = false;
          } else {
            direction = true;
          };

          let j = input.length - 1;
          while (j > 0) {
            if (input[j] === ')') {
              stack.push(reverseWitStack(input.slice(i + 1, j), direction))
              stack.push(input[j]);
              if (direction === true) {
                direction = false;
              } else {
                direction = true;
              };
              i = j;
              break;
            } else {
              j--;
            }
          }
        } else {
          stack.push(input[i]);
        }
      }

      let tempString = '';

      while (stack.length) {
        if (direction === true) {
          tempString += stack.shift(); 
        } else {
          let char = stack.pop();
          if (char === ')') {
            char = '(';
          } else if (char === '(') {
            char = ')';
          }
          tempString += char;
        }
      }

      return tempString;
    };
    
    return reverseWitStack(text, true);
};