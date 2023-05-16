/**
 * this keyword
 */

const user1 = {
    userName: "Praveen",
    age:27,
    showInfo(){
        console.log(this.userName) /**this refers the object calling the function */
    },
}
user1.showInfo();

const user2 = {
    userName:"RAwat",
    age:26,
    displayMessage:()=>{
        console.log(this.age)
    } /**arrow fn do not have their own this,arrow function has this global object, window. reg. fn have their own this */
}

user2.showInfo = user1.showInfo;
user2.showInfo();
console.log(user2);
user2.displayMessage();