/**
 * Given a string s, you need to reverse it.

Example 1:

Input:
s = "Hello"
Output: 
olleH
Explanation: Reverse of Hello is olleH

Example 2:

Input:
s = "World"
Output:
dlroW
Explanation: Reverse of World is dlroW

Your Task: 
The input s is provided as a parameter to the function reverseString. You need to reverse it and return it so it can be printed by the driver code.

 */


function reverseString(s){
let rev="";
for (let i=s.length-1;i>=0;i--){
    rev+=s[i]
}
return rev;``}
//write your code here
