/**
 * Array Methods - Pushg and COncat
 */

/**Mutable Objects {that can be changed,array}OR Immutable Objects{where cant change,string} */

let fruits = ["apple","mango","banana"];
console.log(fruits);
fruits.push("orange")
console.log(fruits);
fruits.push("kiwi","berries","melons")
console.log(fruits);
//we can add mu;ltiple things using push or write multiple args
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9]
let arr4 = arr1.concat(arr2);
let arr5=arr1.concat(arr2,arr3)
//concat can be used to concat more than 2 arrays, combine as many arrays 
// as you want
console.log(arr4);
console.log(arr5);
