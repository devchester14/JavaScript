/** Conditiona statements*/

const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("Enter a number? "));


// remainder variables for divisibility by 3,5 and 7
const remainder = number % 3;
const remainder2 = number % 5;
const remainder3 = number % 7;


if (remainder === 0 && remainder2 === 0) {
  console.log("fizz");
}  if (remainder2 === 0 || remainder === 0) {
  console.log("buzz");
}  if (remainder3 === 0) {
  console.log("BuzzBuzz");
} else {
  console.log("Number is not divisible by 3, 5 and 7");
}


// in conjuction with multiple ifs the else will be dependent on the most immediate if condition
// i ie ie e all depend on sequence only one will be shown
// i i i all will be executed



