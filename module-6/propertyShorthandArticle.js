Objects in JavaScript are the most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript primitive data-types (Number, String, Boolean, null, undefined, and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).

The shorthand syntax for object property value is very popular and widely used nowadays. The code looks cleaner and easy to read. The shorthand property makes the code size smaller and simpler.

Example: This example displaying the details of object using shorthand Syntax for object property value in ES6.

// Object property shorthand
const name = 'Raj'
const age = 20
const location = 'India'
  
// User with ES6 shorthand
// property 
const user = {
    name,      
    age,
    location
}
  
console.log(user) 


Output

{ name: 'Raj', age: 20, location: 'India' }

 

Example: This example displaying the details of the object without using shorthand Syntax for object property value.

// Object property shorthand
const name = 'Raj'
const age = 20
const location = 'India'
  
// User without ES6 
// shorthand property 
const user = {
    name: name,      
    age: age,
    location: location
}
  
console.log(user) 


Output

{ name: 'Raj', age: 20, location: 'India' }
