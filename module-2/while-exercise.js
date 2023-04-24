/**
 * user enters a number and if the number is more than 50 then ask user to enter less than 50
 */

let readlineSync = require(`readline-sync`)

let number = readlineSync.question(`Enter a number less than 50 - `);
while(number>=50){
console.log(`${number} is unacceptable, Enter the value required`)}

console.log(`Accepted`);