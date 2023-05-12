/**
 * Copy by reference
 */



shallow copy: in case of shallow copy when we copy the original object into the 
clone object then the clone object has the copy of the memory address of the original object. 
both point at the samme memory address. Both original object and cloned object internally point to the same referenced objectsince they point to the same
memory address so if we changed the cloned object then changes would be reflected back to the original object


let arr = ['a','b','c'];
arr2 = arr;

arr2.push('d');


console.log(arr2)
console.log(arr) both arrays are affected

in above code when we tried to insert element into the array then original is altered as well. 
we did not intend it and it is not advisable as well!



Spread Operator: allows an iterable to expand in places whjere 0+ args are expected. it is mostly used in the variable array where there is 
more than 1 values expected. it allows us the privilege to obtain a list of parameters from an array. Syntax of Spread operator is same as rest parameter but it works completely opposite of it!

// SPREAD OPERATOR for copying 
let arr = ['a','b','c'];
let arr2 = [...arr];
console.log(arr);
arr2.push('d');
console.log(arr2);
console.log(arr)

by using the spread operator we make sure that the original array is not affected whenever we alter the new array