/**
 * Property existence. For in
 */

const obj = {
    name: "Praveen",
    city: "mumbai"
}

const isPropertyFound = "name" in obj;
// console.log(isPropertyFound); /**return true or false */
// objects do not have index, cannt use let of, can only use let item in
for (let key in obj){
    console.log(key, obj[key]);
}

