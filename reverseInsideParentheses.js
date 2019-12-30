/*

In this kata, you will be given a string of text and valid parentheses, such as "h(el)lo". You must return the string, with only the text inside parentheses reversed, so "h(el)lo" becomes "h(le)lo". However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, so it faces the original direction (parentheses included). Text like "h((el))l)o" becomes "'h(l(el))o'". This pattern should repeat for however many layers of parentheses.

For example:

reverseInParens("h(el)lo") == "h(le)lo");
reverseInParens("a ((d e) c b)") == "a (b c (d e))");
reverseInParens("one (two (three) four)") == "one (ruof (three) owt)");
reverseInParens("one (ruof ((rht)ee) owt)") == "one (two ((thr)ee) four)");
Input parentheses will always be valid (i.e. you will never get "(()").

*/

const reverseInParens = (text) => {
    // Input - string of text that may or may not include parantheses
    // Output - depending on placement of paratheses in text, reversed elements between parentheses
    // Contraints - n/a 
    // Edge cases: given a string without parantheses, returning given string

    // iterate over input text
    //  if character equals '('
    //    string += call reverseStack function and pass in string sliced from '('
    //  else
    //    string += char
   

    //  let reversed = true
    //  let global Stack = [];
    //  
    //  function reverseStack(string, stack)
    //   if stack.length === 1
    //      if reversed === true
    //          return string.split('').reverse().join();
    //      else
    //          return string
    //   else
    //      if reversed === true 
    //        push character onto stack
    //         if character equals '('
    //          reversed = false;
    //          reverseStack(string.sliced '(', newStack)
    
    let reversedText = '';

    const reverseString = (input) => {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '(') {
                reversedText += reverseStack(input.slice(i)); 
            } else {
                reversedText += input[i];
            };
        };
    };

    reverseString(text);

    let reversed;
    let globalStack = [];
    let stackText = '';

    const reverseStack = (string, stack) => {
        if (stack.length === 1) {
            if (reversed === true) {
                return string.split('').reverse().join('');
            } else {
                return string
            }
        } else {
            reversed = true;
            for (let j = 0; j < string.length; j++) {
                if (string[j] === '(') {
                    reversed = false;
                    globalStack.push(reverseStack(string.slice(j))); 
                } else {
                    globalStack.push(string[j]); 
                }
            }
        }

        while (globalStack.length) {
            stackText += globalStack.pop();
        }

        return stackText;
    };

    return reversedText;
}

console.log(reverseInParens("h(el)lo"));
// console.log(reverseInParens("a ((d e) c b)"));
// console.log(reverseInParens("one (two (three) four)"));
// console.log(reverseInParens("one (ruof ((rht)ee) owt)"));



