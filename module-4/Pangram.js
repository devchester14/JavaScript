/**
 * Pangram string
 * You are given a string s. You need to find if the string is a panagram or not.
A panagram contains all the letters of english alphabet at least once.

Example 1:

Input:
s = Thequickbrownfoxjumpsoverthelazydog
Output: 1

Example 2:

Input:
s = HeavyDuty
Output: 0

Your Task:

You only need to complete the function isPanagram() that takes s as parameter and returns either true or false. (the driver's code print 1 if the returned value is true, otherwise 0)

Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(1).

Constraints:
1 <= |s| <= 10000

 */


function isPangram(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /[^a-zA-Z]/g;
    let cleanStr = str.replace(regex, "").toLowerCase();
    
    for (let i = 0; i < alphabet.length; i++) {
      if (cleanStr.indexOf(alphabet[i]) === -1) {
        return 1;
      }
    }
    
    return 0;
  }
  
  let sentence = "The quick brown fox jumps over the lazy dog";
  console.log(isPangram(sentence)); // true
  
  let sentence2 = "This is not a pangram";
  console.log(isPangram(sentence2)); // false
  

  /**
   * function isPangram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let cleanStr = "";
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (alphabet.includes(char) && !cleanStr.includes(char)) {
      cleanStr += char;
    }
  }
  
  return cleanStr.length === alphabet.length;
}

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence)); // true

let sentence2 = "This is not a pangram";
console.log(isPangram(sentence2)); // false

   */

/**
 * function isPangram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let cleanStr = "";
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "A" && char <= "Z") {
      char = char.toLowerCase();
    }
    if (alphabet.includes(char) && !cleanStr.includes(char)) {
      cleanStr += char;
    }
  }
  
  return cleanStr.length === alphabet.length;
}

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence)); // true

let sentence2 = "This is not a pangram";
console.log(isPangram(sentence2)); // false

 */