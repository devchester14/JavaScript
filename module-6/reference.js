/**
 * Object Reference and shallow copy ⛵⛵⛵
 * objects are not copied by value, they are copied by reference
 * values are changed in memory location, values are not changed
 * this is called as shallow copyu. the copy is not deep. the copy is created and value changed then older also changes so
 * this is called shallow copy since it is changed
 * 
 */

const person1 = {
    name: "Praveen",
    age: 25,
    address: {
        city: "DOON",
        state:"UK"
    }
}


const person2 = Object.assign({},person1) /**it is also a shallow copy not a deep copy, in nested object, object.assign does not work.*/
// console.log(person2)

person2.name = "Rawat"
person2.address.city="Delhi"
person2.address.state="Delhi"
person1.age=10;
console.log(person2);
console.log(person1)


/**Still not a deep copy */

// console.log(person1);

// const person2 = person1;

// person2.name = "Sunny" /**Reference value overwrites the value of person 1 */
// person1.age = "100"
// console.log(person2);
// console.log(person1);