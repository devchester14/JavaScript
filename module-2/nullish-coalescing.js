/**
 * Nullish coalescing
 * || vs ??
 * 
 * ||basically || will consider empty string zero null undefined all as falsy values
 * but nullish coalescing it only looks for null and undefined
 */

let firstName="";

// only if null or undefined, nullishcoal will give the value only on the predefined conditions

// console.log(firstName || "HIddengame");
let a=12
let b;
console.log(a+(b??0))

// whenever we know that value can be  0 or empty string and can be some other values always use nullish coalescing