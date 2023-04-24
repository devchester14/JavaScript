/**
 * Given two strings which are of lengths n and n+1. 
 * The second string contains all the character of the first string, 
 * but there is one extra character.
 * Your task to find the extra character in the second string. 

Example 1:

Input:
s1 = abcd
s2 = badce
Output: 
e

Example 2:

Input:
s1 = efg
s2 = gtfe
Output: 
t

Your Task:

You only need to complete the function extraChar() that takes s1 and s2 as parameters and returns that extra character. 

 * @param {*} s1 
 * @param {*} s2 
 * @returns 
 */



function extraChar(s1, s2) {
  for (let i = 0; i < s2.length; i++) {
    if (s1.indexOf(s2[i]) === -1) {
      return s2[i];
    }
  }
}
