/**
 * Given a string S, check if it is palindrome or not.

Example 1:

Input: S = "abba"
Output: 1
Explanation: S is a palindrome

Example 2:

Input: S = "abc" 
Output: 0
Explanation: S is not a palindrome

 

Your Task:
You don't need to read input or print anything. Complete the function isPalindrome()which accepts string S and returns an integer value 1 or 0.

Expected Time Complexity: O(Length of S)
Expected Auxiliary Space: O(1)


Constraints:
1 <= Length of S<= 105

 */


/**
 *  isPalindrome(S){
        //code here
        return S.split("").reverse().join("") == S ? 1 : 0
    }
 */

    /**
     * function isPalindrome(str) {
  let len = str.length;
  
  // Loop through half of the string
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // If the corresponding characters don't match, the string is not a palindrome
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  
  // If we made it through the loop without returning false, the string is a palindrome
  return true;
}

let word1 = "racecar";
console.log(isPalindrome(word1)); // true

let word2 = "hello";
console.log(isPalindrome(word2)); // false

     */