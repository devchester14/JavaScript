/**
 * Split and join
 * 
 * palindrome:madam
 */
// split convert string to array of characters
// join converts array back into string
const inputStr="madam";
const arrChar = inputStr.split("")
arrChar.reverse()
const reversedStr = arrChar.join("")
reversedStr==inputStr?console.log(`palindrome`):console.log(`not palindrome`);;
console.log(reversedStr,"RevString")