/**
 * Given an array write a function that returns an obkect with sum of even and odd numbers
 * arr=[1,2,3,4,5,6]
 * OUTPUT ={eve:12,odd:9}
 */

const arr = [1,2,3,4,5,6];
const result = arr.reduce((acc,cur)=>cur%2==0?{...acc,even:acc.even+cur}:{...acc,odd:acc.odd+cur},{even:0,odd:0})
console.log(result)