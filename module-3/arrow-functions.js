/**
 * Arrow functions => () ➡️ ✈️
 */

const calculateSum = function(x,y){
    return x + y;
}

const calculateAddition = (x, y) => x + y


// const calculateSumXGreaterY = (x,y)=>{
//     if(x > y){
//         return x + y
//     }else{
//         return x - y
//     }
// }

const calculateSumXGreaterY = (x, y) => x > y ? x + y : x - y
// console.log(calculateSum(12,4))
// console.log(calculateAddition(11,2));
const output = calculateSumXGreaterY(-3,3)
console.log(output);