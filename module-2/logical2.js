/**
 * Logical operator with truthy and falsy values
 * 1. OR ||
 * 2. AND &&
 */

/**
 * Truthy Values
 * 
 * Falsy Values = "", 0 , null, undefined
 * 
 * || with multiple falsy values will give the last falsy value, if it gets the first truthy value, search for first falsy
 * 
 * && will search for the first falsy value and return that, if not found then it will return the last truthy value
 */

// const firstname = "";
// const nickName = "sun";

// const userName = firstname || nickName || "someValue"  short circuiting
// console.log(`Name - ${userName}`)

// console.log(Boolean(undefined));

// let a = 12;
// let b="";

// console.log(a+(b||0));


// let a = 12 ;
// let b;
// console.log(a+(b||0));



const firstname = "Mars";
const nickName = "null";

const userName = firstname && nickName && "Hiddengeek"
console.log(`Name - ${userName}`)


