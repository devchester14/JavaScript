/**
 * You are given a string s consisting of multiple words. You need to count the total words in the string. Words are separated by a single space.
Note: It is guaranteed that the last character of the given string is not a white space.

Example 1:

Input:
s = Geeks

Output: 
1

Example 2:

Input:
s = World is hello

Output: 
3

Your Task:

You only need to complet the function countWords() that takes s as parameter and returns the count of words in the string. 

Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(1).

Constraints:
1 <= |s| <= 10000

 

 */


function countWords(str) {
    let wordCount = 0;
    
    // Remove whitespace from start and end of string
    str = str.trim();
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // If the character is a space or newline, count it as a word
      if (str[i] === " " || str[i] === "\n") {
        wordCount++;
        
        // Skip over any additional spaces or newlines
        while (str[i] === " " || str[i] === "\n") {
          i++;
        }
      }
    }
    
    // Add one to the word count for the last word in the string
    wordCount++;
    
    return wordCount;
  }
  
  let sentence = "The quick brown fox jumps over the lazy dog";
  console.log(countWords(sentence)); // 9
  
  let sentence2 = "   This  is a  sentence  with   extra  spaces   ";
  console.log(countWords(sentence2)); // 6
  

  /**
   *  return str.trim().split(/\s+/).length;
   */