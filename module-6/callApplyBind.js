/**
 * Function Borrowing - Call, Apply And Bind
 */

const user1 = {
    name: "praveen",
    age: 90,
    // sayHi(){
    //     console.log(this.name);
    // },
};

const user2 = {
    name : "Rawat",
    age: 100,
    // sayHi(){
    //     console.log(this.name);
    // }
}

const user3 = {
    name : "chester",
    age: 28,
    // sayHi(){
    //     console.log(this.name); this is implicit binding
    // }
}

// user1.sayHi();
function sayHi(degree,year){
    console.log(this.name,degree,year); /**this is written only for values of object else degree and year are param of fns */
}

// user1.sayHi()
/**in JS call, apply and bind are methods of functions */
sayHi.call(user1,"BTECHCSE",2018);
sayHi.call(user2,"MTECHCSE",2018);

/** whenever function is called, the value that is called is the this in the function object*/



// APPLY IS SIMILAR TO CALL
sayHi.apply(user1,["BTECH",2018])
sayHi.apply(user2,["MTECH",2022])


//first parameter  has to be object borrowing the fn, second  are params fn takes. with cal;l first param is object next are params of fn args but in apply it has 
// array for. this is also called explicit binding