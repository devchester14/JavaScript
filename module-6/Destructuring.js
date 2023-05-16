/**
 * Destructuring Objects
 */


let obj = {
    name: "Praveen",
    address: {
        state: "DL",
        city: "DL",
        locality: "Dwarka"
    },
    skills:["FE","JS","DSA"]
}


// let {name, address, skills} = obj /**expression on left must be keys in object */
// let {name, ...rest}=obj
// console.log(name);
// console.log(rest)

// let numbers = [1,2,3];
// let [a,b,c]=numbers
// console.log(a,b,c)
// let {name:userName, address:userAddress}=obj
// console.log(userName, userAddress)

let {name,address:{city,locality},skills} = obj /**cannot use entire object since destructured */
console.log(address)
// let {address : {city}} = obj
// console.log(city);