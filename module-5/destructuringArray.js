/**Destructuring Array */

ES6 technique provides shorthand syntax to extract or unpacl array elements or properties of an object in to distinct variables using a single line of code.
this helps us to segregate data of any iterable as well as non iterable object and then helops us to use that data individually on need or DOMRectReadOnly. it makes code shorte=r and ReadableByteStreamController.


The Destructuring assignment is the important technique introduced in ECMAScript 2015 (ES6) version of JavaScript that provides a shorthand syntax to extract or unpack array elements or properties of an object into distinct variables using a single line of code. In other words, this assignment helps us to segregate data of any iterable as well as non-iterable object and then helps us to use that segregated data individually on need or demand. It makes the code shorter and more readable. 

In general way implementation of the extraction of the array is as shown below: 

Example:

var names = ["alpha", "beta", "gamma", "delta"];
 
var firstName = names[0];
var secondName = names[1];
 
console.log(firstName);//"alpha"
console.log(secondName);//"beta"


Output

alpha
beta

Syntax:

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

    Object destructuring:

({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

    or

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}

Array destructuring: Using the Destructuring Assignment in JavaScript array possible situations, all the examples are listed below:

 

    Example 1: When using destructuring assignment the same extraction can be done using below implementations. 

var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
     
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 
//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(secondName);//"beta


Output

alpha
beta
alpha
beta

 

    Example 2: The array elements can be skipped as well using a comma separator. A single comma can be used to skip a single array element. One key difference between the spread operator and array destructuring is that the spread operator unpacks all array elements into a comma-separated list which does not allow us to pick or choose which elements we want to assign to variables. To skip the whole array it can be done using the number of commas as there is a number of array elements. 

var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"


Output

alpha
gamma

 

    Example 3: In order to assign some array elements to variable and rest of the array elements to only a single variable can be achieved by using rest operator (…) as in below implementation. But one limitation of rest operator is that it works correctly only with the last elements implying a subarray cannot be obtained leaving the last element in the array. 

var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"


Output

alpha
[ 'gamma', 'delta' ]

 

    Example 4: Values can also be swapped using destructuring assignment as below: 

var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 
//After swapping
[firstName, secondName] = [secondName, firstName]
     
console.log(firstName);//"beta"
console.log(secondName);//"alpha"


Output

alpha
beta
beta
alpha

 

    Example 5: Data can also be extracted from an array that is returned from a function. One advantage of using a destructuring assignment is that there is no need to manipulate an entire object in a function but just the fields that are required can be copied inside the function. 

function NamesList() {
        return ["alpha", "beta", "gamma", "delta"]
    }
var[firstName, secondName] = NamesList();
 
console.log(firstName);//"alpha"
console.log(secondName);//"beta"


Output

alpha
beta

 

    Example 6: In ES5 to assign variables from objects its implementation is 

var marks = {x: 21, y: -34, z: 47 };
 
var x = marks.x; // x = 21
var y = marks.y; // y = -34
var z = marks.z; // z = 47
 
console.log(x);
console.log(y);
console.log(z);


Output

21
-34
47

 

    Example 7: The above implementation in ES6 using destructuring assignment is. 

var marks = {x: 21, y: -34, z: 47 };
 
const { x, y, z } = marks; // x = 21, y = -34, z = 47
 
 
console.log(x);
console.log(y);
console.log(z);


Output

21
-34
47

