/**
 * You are given with a string that is in email format. Here, you have to take input of a string till the '@' character.

Example 1:

Input: a = hello_world@xyz.com
Output: hello_world


Example 2:

Input: a = geeksforgeeks@gfg.com
Output: geeksforgeeks

Your Task:
Your task is to complete the function getLine() to take input of string upto @.

 */



getLine(str) {
    // write your code here
 return   str.substring(0,str.indexOf("@"))
}