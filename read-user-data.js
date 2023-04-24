const readlineSync=require("readline-sync")


const userName = readlineSync.question("May I know your name? ");
const userAge = readlineSync.question("May I know your age? ")
console.log(`Welcome ${userName}, your Age is ${userAge}`);
