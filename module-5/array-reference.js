/**
 * copying an array---> Array References📔📔📔📔
 */

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log(arr1,"Arr1  ::");
// console.log(arr2,"Arr2  ::");

// arr2.push(4);

// console.log("Updared Arr ::", arr2)

//shallow copy is when one variable is changing the value, and that value is changing then it is called shallow copying
// to avoid this we use spread operator


//spread operator
// let arr3=[...arr1];
// console.log(arr3,"ARR 3");
// arr3.push(5);
// console.log(arr3,"update array and normal array",arr1);

// let arr4=[1,2,3,4];
// let arr5=[];

// for( let number of arr4){
//     arr5.push(number)
// }
// arr5.push(5)
// console.log(arr4,"arrays",arr5)

//spread operator is working like for loop. its all the same

let str="praveen"

let arrofAlpha=[...str];
console.log(arrofAlpha)