// kata link: https://www.codewars.com/kata/5265326f5fda8eb1160004c8

/*
instructions:

We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// my solution:
function numberToString(num) {
    return String(num);  // Converts the number to a string using the 'String()' constructor
}

// test cases:
console.log(numberToString(123));   // should return "123"
console.log(numberToString(999));   // should return "999"
console.log(numberToString(-100));  // should return "-100"

/*
note: In some consoles (like in browsers), the quotes around the strings may be omitted when displaying the result. 
However, the returned value is still of type string. To confirm, you can use `typeof` like this:
console.log(typeof numberToString(123)); // should return "string"
*/