// kata link: https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript

/*
instructions:

You need to write a function that reverses the words in a given string. Words are always separated by a single space.
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

// my solution:
function reverse(string) {
    return string.trim().split(' ').reverse().join(' ');
}

// .trim()             // remove espaços no início e no fim
// .split(' ')         // divide a string em palavras
// .reverse()          // inverte a ordem das palavras
// .join(' ');         // junta as palavras em uma string


// test cases:
console.log(reverseWords("Hello World")); // should return "World Hello"
console.log(reverseWords("Hi There."));   // should return "There. Hi"
