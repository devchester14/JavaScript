/**
 * Sum of numbers less than 40
 */

let arr = [10,15,61,54,44,32,39,23];



// 
// function product(a, b){
//     return a * b;
// }
// arr = new Array(1, 2, 3, 6, 5, 4);

// var product_of_arr = arr.reduce(product)
// console.log(product_of_arr)

const result = arr.reduce((acc,cur)=>cur<40?acc+cur:acc,0);
console.log(result)