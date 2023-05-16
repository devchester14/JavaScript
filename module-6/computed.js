/**
 * Adding properties to objects
 * Computed properties
 * 
 */

const readlineSync = require('readline-sync');
const key = readlineSync.question("What do you want to know about(name/age/city/state)?");
const skills = readlineSync.question("which skill you want to learn (DSA/TS/NEST/NEXT/REACT)")

const obj = {
        name: "Praveen",
        age: "26",
        [skills]:`skills not available`
}


obj.city = "Mumbai";
obj.state = "Delhi"
console.log(obj["name"]) /**Non - computed property/Property of object */
console.log(obj[skills]); /**computed property */
// it will find the value of key, the variable. whatever key we eneter it computes.









