/**
 * Short Hand 🤚🤚🤚
 */


function getObjects(name,city){
    return{
        name,city
    }
}

const obj = getObjects("Praveen","UK");
console.log(obj)
// { name: 'Praveen', city: 'UK' }


const age = 29;
const skill = "javascript";

console.log({userName:age,edu:skill})