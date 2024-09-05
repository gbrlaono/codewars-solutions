// codewars link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

/*
instructions:

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

// my solution:
function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // define the vowels to be counted
    return str.split("").filter(char => vowels.includes(char)).length; // split the string into an array of characters, filter for vowels, and return the count
}

// test cases:
console.log(getCount("abracadabra")); // should return 5
console.log(getCount("my pyx")); // should return 0
console.log(getCount("pear tree")); // should return 4
console.log(getCount("HELLO WORLD")); // should return 0

