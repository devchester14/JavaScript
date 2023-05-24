/**For- in loop 
 * 
 * 
 * for in javasceipt is used to iterate over the properties of an object.
it loops only over those keys that have Enumerable property set to true. The key values in an object have four attributes: value, writable, enumerable, configurable. Enumerable when set to true means that we can iterate over that peoperty

A simple example to illustrate the for-in loop:

    const list = [10, 20, 30];
    let total = 0;
    for (const item in list) {
        total += list[item];
    }
    console.log(total);


// IMPORTANT POINTS
- Use the for-in loop to iterate over non-array objects. Even though we can use for-in loop for array, it is generally not recommended. Instead, use a for loop for looping over an array.
- The Properties iterated with for=in loop also includes the properties of the objects higher in the prototype chain.
- The order in which properties are iterated may not mnatch the properties that are defined in the object


Syntax: 

for (let i in obj1) {
  
    // Prints all the keys in
    // obj1 on the console
    console.log(i);

 

 const courses = {
 
        // Declaring a courses object
        firstCourse: "C++ STL",
        secondCourse: "DSA Self Paced",
        thirdCourse: "CS Core Subjects"
    };
 
    // Creating a new empty object with
    // prototype set to courses object
    const student1 = Object.create(courses);
 
    // Defining student1 properties and methods
    student1.id = 123;
    student1.firstName = "Prakhar";
    student1.showEnrolledCourses = function () {
        console.log(courses);
    }
 
    // Iterating over all properties of
    // student1 object
    for (let prop in student1) {
        console.log(prop + " -> "
            + student1[prop]);
    }


Output

id -> 123
firstName -> Prakhar
showEnrolledCourses -> function () {
        console.log(courses);
    }
firstCourse -> C++ STL
secondCourse -> DSA Self Paced
thirdCourse -> CS Core Subjects
*/

