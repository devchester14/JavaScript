/**
 * 😺😺😺😺
 * 🐶🐶🐶🐶
 * 
 * 
 * Given a Binary Number B, find its decimal equivalent.
 

Example 1:

Input: B = 10001000
Output: 136

Example 2:

Input: B = 101100
Output: 44

 

Your Task:
You don't need to read or print anything. Your task is to complete the function binary_to_decimal() 
which takes the binary number as string input parameter and returns its decimal equivalent.
 

Expected Time Complexity: O(K * Log(K)) where K is number of bits in binary number.
Expected Space Complexity: O(1)
 

Constraints:
1 <= number of bits in binary number  <= 16
*/

let decimal =  binary2Decimal = (str) =>{
    let binaryLength = str.length;
   let decimalValue = 0;

   for(let i = binaryLength - 1; i >= 0; i--){
      if(str[i] == '1'){
         decimalValue += Math.pow(2, binaryLength - 1 - i);
      }
   }
   
   return decimalValue;
}

let result = binary2Decimal("101000");
console.log(result)

