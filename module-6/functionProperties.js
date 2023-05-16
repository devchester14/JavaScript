/**
 * Function as object property 🔥🔥
 */

// cannot use arrow function as property, secondly use only regular function
const obj = {
    name: "Praveen Rawat",
    greetMessage: function (){
        console.log(`Hello ${this.name}`);
    },
    bye(){
        console.log(`Bye`)
    }
    // this is how we use function as a property, if keyword fucntion is used it gives an array, "boring function".
    // internally we are creating a key, internally we are assigning this function to that object but not saving it in the memory, so  it saves memory as well
    
}
console.log(obj)
obj.bye();