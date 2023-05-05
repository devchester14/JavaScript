/**
 * Array Sort 1️⃣2️⃣3️⃣📉
 */

const fruits = ["apple","cherry","banana","orange","ball"];
const sortedArray = fruits.sort();

console.log(sortedArray,"SORTED ARRAY")
/**does sorting in place, does not return an 
 * array just changes the original array it will compare the first comparision
 * it means subtraction and subtracts the numeric representation
 * takes utf-16 transformation numberic rep of A is smaller than numeric 
 * rep of C so on the basis of number we get the sorted values
*/

const numbers = [1,2,3,4,5,6,11,22,99,77]

function sortINAsccendingOrder(a,b){
    return a-b
}

function sortDesc(a,b){
    return b-a
}
numbers.sort(sortDesc)
console.log(numbers)
/**with numbers we dont get the expected result because it turns the numbers
 * into string and checks the unicode transformation code, so technically 
 * 11 is greater than 2 but when converted to string and check numberic represtitation of pattern
 * using utf-16 pattern than 11 is smaller
 */