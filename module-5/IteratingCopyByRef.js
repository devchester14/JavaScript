/**Iterating over an array and copy by reference */


n JavaScript, the array is a single variable that is used to store different elements. It is often used when we want to store a list of elements and access them by a single variable. Unlike most languages where the array is a reference to the multiple variables, in JavaScript array is a single variable that stores multiple elements.


Declaring arrays -

1st method ->

Let s1 = “Prakash”;

Let s2 = “Ashish”;

Let s3 = “Riya”;

Let s4 = “Adarsh”;


2nd method->

// Initializing while declaring

var Arr1 = ["1", "2", "3", "Prakash"];


 

Loops - 

Looping in programming languages is a feature which facilitates the execution of a set of instructions/functions repeatedly while some condition evaluates to true.

For loop provides a concise way of writing the loop structure. Unlike a while loop, a for statement consumes the initialization, condition, and increment/decrement in one line thereby providing a shorter, easy-to-debug structure of looping. 


Syntax:


for (initialization condition; testing condition; 

                              increment/decrement)

{

    statement(s)

}


Example:

Let studentsName = [“rahul” , “riya” , “sumit” , “aryan”];

Let arrLength = studentsName.length

for(let i = 0 ; i<arrLength ; i++){

console.log(studentsName[i]) 

}

Output - rahul

              Riya

              Sumit

              Aryan



 

For let of

The JavaScript for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Example :

for(let name of studentsName){

console.log(name) }


Output - rahul

              Riya

              Sumit

              Aryan



The For In Loop

 The JavaScript for in statement loops through the properties of an Object:

for (key in object) {

  // code block to be executed

}


Example-

for(let name in studentsName){

console.log(name) }


Output - 

0

1

2

3

Copy by Reference

Shallow Copy: When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. 


 

Example:

Let arr[1] = [1,2,3]

Let arr1 = arr2;

console.log(“arr1” , arr)

console.log(“arr2” , arr)

arr2.push(4)

console.log(“updated arr1” , arr);

console.log(“updated arr2” , arr);


 

Output:

Arr1 = [1,2,3]

Arr2 = [1,2,3]

Updated arr1 = [1,2,3,4]

Updated arr2 = [1,2,3,4]


Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


 

Example:

Let arr[1] = [1,2,3]

Let arr1 = arr2;

console.log(“arr1” , arr1)

console.log(“arr2” , arr2)

arr2.push(4)

console.log(“updated arr1” , arr1);

console.log(“updated arr2” , arr2);


 

//spread operator

Let arr3 = [...arr1]

console.log(“arr3” , arr3)

arr.push(5)

console.log(“arr1” , arr1)

console.log(“arr3” , arr3)


 

Output:

Arr1 = [1,2,3]

Arr2 = [1,2,3]


Updated arr1 = [1,2,3,4]

Updated arr2 = [1,2,3,4]


arr3 = [1,2,3,4]

Updated arr1 = [1,2,3,4]

Updated arr3 = [1,2,3,4,5]