/**
 * Object Reference and deep copy
 */


one of the funcdamental differences of objects versus primitices is that objects are stored and copuied by ReferenceError, whereas primitice values: String, numbers, booleans, etc are always copied as aw hile value.ReferenceError

To copy an object in javasscript you have three iptiobs:

1. Spread syntax (...)
2. Object.assign() method
3. JSON.stringify() and JSON.parse()


const person = {
    firstName: 'Geek',
    lastName: 'Sharma'
};

let p1 = {
    ...person
};

let p2 = Object.assign({}, person);

let p3 = JSON.parse(JSON.stringify(person));

 

Bot
h spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy

/**Shallow copy vs deep copy */

variables are used in javsctipt to store values whivh can be references or primitives. A new variable withb the identical value is created when a value contained in a variable is copied. YOu can just use an assignment for a primitive value

let a = 1;
let copya = a;

copya=2;
console.log(a);

When you change the value of the copya variable, the value of the original remains the same.

However, using the assignment operator on a reference value will prevent it from copying the value. As an alternative, the identical memory item will be referenced by both variables:

let person = {
    firstName: 'Geek',
    lastName: 'Sharma'
};
let copiedPerson = person;

copiedPerson.firstName = 'Prabal';
console.log(person);


Output

{ firstName: 'Prabal', lastName: 'Sharma' }

A shallow copy indicates that certain values of the new variable are still connected to the original variable, but a deep copy means that all of the values of the new variable are separated from the original variable.


Shallow Copy example

let person = {
    firstName: 'Geek',
    lastName: 'Sharma',
    address: {
        street: 'Connaught Place',
        city: 'New Delhi',
        country: 'India'
    }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Prabal'; // disconnected

copiedPerson.address.street = 'Niwaru'; // connected
copiedPerson.address.city = 'Jaipur'; // connected

console.log(copiedPerson);

console.log(person);


Output

{
  firstName: 'Prabal',
  lastName: 'Sharma',
  address: { street: 'Niwaru', city: 'Jaipur', country: 'India' }
}
{
  firstName: 'Geek',
  lastName: 'Sharma',
  address: { street: 'Niwaru', city: 'Jaipur', country: 'India' }
}

When you show the values of the person object, you will find that the address information changed but the first name.

The explanation is that while the first name is a primitive value, the address is a reference value. Although the references for copiedPerson and person are different, the references for these objects are the same for address objects.

 
Deep Copy example

The following code replaces the Object.assign() method by the JSON methods to carry a deep copy the person object:

let person = {
    firstName: 'Geek',
    lastName: 'Sharma',
    address: {
        street: 'Connaught Place',
        city: 'New Delhi',
        country: 'India'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Prabal'; // disconnected

copiedPerson.address.street = 'Niwaru';
copiedPerson.address.city = 'Jaipur';

console.log(person);


Output

{
  firstName: 'Geek',
  lastName: 'Sharma',
  address: { street: 'Connaught Place', city: 'New Delhi', country: 'India' }
}

In this illustration, every value in the copiedPerson object is segregated from the values in the person object. You have now mastered the shallow copy and deep copy methods for copying objects in JavaScript.





