// kata link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

/*
instructions:

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// my solution:
function solution(str){
    return str.split('').reverse().join('');
  }

// test cases:
console.log(solution('world'));  // should return 'dlrow'
console.log(solution('word'));   // should return 'drow'