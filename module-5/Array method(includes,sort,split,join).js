/**Array method(includes,sort,split,join) */

Spread

Spread Operator is a very simple and powerful feature introduced in ES6 standard of JavaScript, which helps us to write nicer and shorter code. The JavaScript spread operator is denoted by three dots (…). The spread operator helps the iterable objects to expand into individual elements. Iterable objects are those on which we can use a loop, for example, Array, Map, Set, etc. In other words, the spread operator allows us to copy all elements from the existing array or object into another array or object.

Let us now visit the following section which will help us to understand the need of the Spread Operator in ES6:

 

Why there is need of spread operator?

As object create memory in heap because value defined in heap so if we copy original object into temporary object and do some changes then it will also reflect in original object same reason for array as Array is also behave as object .


 Syntax:

var variablename1 = [...value];

 

Example 1 :

let arr = [1,2,3];

let arr2 = [4,5];

arr = [...arr,...arr2];

console.log(arr); // [ 1, 2, 3, 4, 5 ]


 

Output: 

[ 1, 2, 3, 4, 5 ]


 

Example 2:

// spread operator for copying 

let arr = ['a','b','c'];

let arr2 = [...arr];

console.log(arr); // [ 'a', 'b', 'c' ]

arr2.push('d'); //inserting an element at the end of arr2

console.log(arr2); // [ 'a', 'b', 'c', 'd' ]

console.log(arr); // [ 'a', 'b', 'c' ]


 

Output:

[ “a”, “b”, “c” ]

[ “a”, “b”, “c”, “d” ]

[ “a”, “b”, “c” ]



Example 3:

// expand using spread operator

let arr = ['a','b'];

let arr2 = [...arr,'c','d'];

console.log(arr2); // [ 'a', 'b', 'c', 'd' ]


 

Output :

[ “a”, “b”, “c”, “d” ]




Destructuring Array

Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables. In Destructuring Assignment on the left-hand side defined that which value should be unpacked from the sourced variable. In general way implementation of the extraction of the array is as shown below:


 

Array destructuring:

var x, y;

[x, y] = [10, 20];

console.log(x); // 10

console.log(y); // 20


 

     or


[x, y, ...restof] = [10, 20, 30, 40, 50];

console.log(x); // 10

console.log(y); // 20

console.log(restof); // [30, 40, 50]



 

Example 1 :

<script>

var names = ["html", "css", "javascript", "react"];

var [firstName, secondName] = names;

     

console.log(firstName);

console.log(secondName);

 

//Both of the procedure are same

var [firstName, secondName] = ["html", "css", "javascript", "react"];

         

console.log(firstName);

console.log(secondName);

</script>


 

Output:

alpha

beta

alpha

beta




In order to assign some array elements to variable and rest of the array elements to only a single variable can be achieved by using rest operator (…) as in below implementation. But one limitation of rest operator is that it works correctly only with the last elements implying a subarray cannot be obtained leaving the last element in the array. 

 

Example 2:
 

<script>

var [firstName,,...lastName] = ["html", "css", "javascript", "react"];

         

console.log(firstName);

console.log(lastName);

</script>

Output:

alpha

  0: "gamma"

  1: "delta"


 

Example 3:

 

<script>

var names = ["html", "css", "javascript", "react"];

 

console.log(firstName);

console.log(secondName);

 

//After swapping

[firstName, secondName] = [secondName, firstName]

     

console.log(firstName);

console.log(secondName);

</script>


 

Output:

beta

alpha