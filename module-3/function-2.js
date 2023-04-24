/**
 * Functions
 * 1. Anonymous Functions and Function Expression 🔥🔥🔥🔥🔥👽
 *  with anon functions using let and const you cannot access them before initialization
 *  with var as well it will give undefined as it is a varaible with memory allocation no stuff
 *  when try to call before declaring
 * 
 * 
 * if an anon function is called  before declaration then it will give an error and with car it will say it not a function
 * with var I get undefined
 * with let you get acnnot accept before initialization 
 *
 * 
 * accessing anon functions before declaration will work as regular variable JS interpret as variable not function 💯 
 */




// function greetMessage(){
//     console.log("hello")
// }

// anonFunc()

// named function expression
var anonFunc = function greetMessage(){
    console.log("Hello a prve")
    console.log(typeof anonFunc)
}
// console.log(typeof anonFunc)

anonFunc()
