/**
 * Odd To Even & vice versa
 */


const arr = [1,2,3,4,5,6,7]

const result = arr.map(num => num%2===0?num-1 :num+1)
console.log(result);