/**
 * Given a string S and two integers L and R. Print the characters in the range L to R of the string.
NOTE: Assume zero based indexing.


Example 1:

Input: 
S = "cdbkdub"
L = 0 , R = 5
Output: "cdbkdu" 
Explanation: Starting from index 0 ('c')
to index 5 ('u').

Example 2:

Input: 
S = "sdiblcsdbud"
L = 3 , R = 7
Output: "blcsd"
Explanation: Starting from index 3 ('b')
to index 7 ('d').


Your Task:  
You don't need to read input or print anything. Complete the function substring() which takes S, L, R as input parameters and returns the string from the range L to R.


Expected Time Complexity: O(|S|)
Expected Auxiliary Space: O(|S|)

Constraints:
1<= |S| <=1000
1 <= L <= 800
1 <= R <= 900
 */


function substring(str, l, r) {
    let string="";
    for(let i=l;i<=r;i++){
        string+=str[i];
    }
    return string
}

const subStr = substring("cdbkdub",0,5)
console.log(subStr);


/**In JavaScript, the slice() method is used to extract a section of a string and return it as a new string, without modifying the original string. The slice() method takes two arguments: the starting index (inclusive) and the ending index (exclusive).

Here's the syntax of the slice() method:

c
Copy code
string.slice(startIndex, endIndex)
startIndex: The index at which to begin the extraction. If the start index is negative, it is treated as stringLength + startIndex, where stringLength is the length of the string.
endIndex: The index at which to end the extraction (exclusive). If the end index is negative, it is treated as stringLength + endIndex, where stringLength is the length of the string.
If you omit the second argument (i.e., endIndex), the slice() method will extract the rest of the string starting from the startIndex.

Here are some examples of using the slice() method in JavaScript:

javascript
Copy code
let str = "Hello, world!";

// Extract the substring from index 2 to index 7 (inclusive)
let substr1 = str.slice(2, 8); // "llo, w"

// Extract the substring from index 2 to the end of the string
let substr2 = str.slice(2); // "llo, world!"

// Extract the substring from index -6 to index -1 (inclusive)
let substr3 = str.slice(-6, -1); // "world"

// Extract the last character of the string
let lastChar = str.slice(-1); // "!"
In the first example, we extract the characters from index 2 to index 7 (inclusive) using the slice() method.

In the second example, we extract the characters from index 2 to the end of the string using the slice() method.

In the third example, we use negative indices to extract the characters from index -6 to index -1 (inclusive) using the slice() method.

In the fourth example, we use a negative index to extract the last character of the string using the slice() method. */