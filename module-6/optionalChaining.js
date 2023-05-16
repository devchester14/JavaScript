/**
 * Optional Chaining 🆒🆒🆒
 */

const user = {
    name: "praveen",
    age: 99,
    address: {
        street: "DL",
        city: "DL"
    },
    likes: "Eat Sing Sleep Repeat",
    getHobby: function () {
        console.log("Football")
    }
}

// if a property is not found it will give you undefined not an error what in case where some user enter it and some dont

// console.log(user.salary.amount)

// property not found in object then it gives error property of undeifned

// sol 01 

// if(user.salary!==undefined){
//     console.log(user.salary.amount)
// }else{
//     console.log("Value not present in object")
// }


// sol 02
// console.log(user.salary?.amount) 
// console.log(user.getHobby())

// user.getHobby()
// console.log(user.getDisplay?.())



/**check value before question mark. or else returns undefined if value before question mark is undefined. it used for nested properties */

/**do not over use optional chaining */
console.log(user.hobbies)