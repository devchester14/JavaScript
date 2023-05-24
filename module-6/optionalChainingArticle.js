/**
 * Optional Chaining
 */


The optional chaining '?.' is an error-proof way to access nested object properties, even if an intermediate property doesnt exist.The

It does not report the error, instead it retyurns the value which is undefined. It also works with function call when we try to call a method which may not exist

The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist. It was recently introduced by ECMA International, Technical Committee 39 – ECMAScript which was authored by Claude Pache, Gabriel Isenberg, Daniel Rosenwasser, Dustin Savery. It works similar to Chaining ‘.’ except that it does not report the error, instead it returns a value which is undefined. It also works with function call when we try to make a call to a method which may not exist.

When we want to check a value of the property which is deep inside a tree-like structure, we often have to perform check whether intermediate nodes exist.

let Value = user.dog && user.dog.name;

 

The Optional Chaining Operator allows a developer to handle many of those cases without repeating themselves and/or assigning intermediate results in temporary variables:

let Value = user.dog?.name;

 

Syntax: 

obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)

 

Note: If this code gives any error try to run it on online JavaScript editor.

Example: Optional Chaining with Object

const user = {
  dog: {
    name: "Alex"
  }
};
 
console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
console.log(user.cat.name);

 

Example: Optional Chaining with Function Call

let user1 = () => console.log("Alex");
let user2 = {
  dog(){
    console.log("I am Alex");
  }
}
let user3 = {};
 
user1?.();       // Alex
user2.dog?.();   // I am Alex
user3.dog();     // ERROR - Uncaught TypeError:
                 // user3.dog is not a function.
user3.dog?.();   // Will not generate any error.