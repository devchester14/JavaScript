/**
 * Destructuring Objects
 */


Destructuring Object

Similar to array destructuring, but with the ability to extract an object's properties (or keys) and their associated values rather than values from an array.

We utilise keys as the variable name while destructuring the objects. The name of the variable and the object's property (or keys) must correspond. If it doesn't match, it gets a value that isn't specified. JavaScript learns which property of the object we wish to attach by doing this.

In object destructuring, keys rather than positions are used to extract data (or index).

First, use the following example to try to understand the fundamental assignment in object destructuring.

 

Simple assignment

const num = {
a: 1, 
b: 2
};  
const {a, b} = num;  
  
console.log(a); // 1  
console.log(b); // 2  


Output

1
2

Let us understand the basic object destructuring assignment.

 

Basic Object Destructuring assignment

const student = {name: 'Prabal', rollno: '5'};  
const {name, rollno} = student;  
console.log(name); 
console.log(rollno); 


Output

Prabal
5

 

Object destructuring and default value

Similar to array destructuring, if the value unpacked from the object is undefined, a default value can be assigned to the variable. The example that follows should make it clear.

const {a = 1, b = 2} = {a: 5};  
  
console.log(a);   
console.log(b);  


Output

5
2

 

Assigning new variable names

We can assign a variable with a different name than the property of the object. You can see the illustration for the same as follows:

const num = {x: 1, y: 2};  
const {x: a, y: b} = num;  
   
console.log(a);   
console.log(b); 


Output

1
2

 

Rest operator

 

We can store all of an object's remaining keys in a new object variable by using the remainder operator (...) during object destructuring.

let {a, b, ...args} = {a: 1, b: 2, c: 3, d: 4, e: 5}  
console.log(a);   
console.log(b);   
console.log(args);  


Output

1
2
{ c: 3, d: 4, e: 5 }
