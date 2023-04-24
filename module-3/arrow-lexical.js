/**
 * following code demonstrates a working arrow function
 * 
 * In this example, we have two objects: myObject and anotherObject. Both objects have
 * a sayHelloArrow method which is an arrow function that uses this to access the name property of the object.

When we call anotherObject.sayHelloArrow(), the arrow function within myObject is invoked, 
but the value of this is determined by the calling object (anotherObject), 
not by the lexical scope of the arrow function itself.
 So, the output will be "Hello, my name is Bob", 
because this.name is referring to the name property of anotherObject.

In this way, we can use arrow functions with the this keyword 
to create methods that can be shared between objects, 
while still having the ability to access the properties of the calling object.
 */


const myObject = {
    name: 'Alice',
    sayHelloArrow: () => {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const anotherObject = {
    name: 'Bob',
    sayHelloArrow: myObject.sayHelloArrow
  };
  
  anotherObject.sayHelloArrow(); // Output: "Hello, my name is Bob"
  