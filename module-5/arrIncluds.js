/**Array includes method
 * arr.includes(any)
 */

const availableSizes=["XS","S","M","L","XL","XXL"]
const readlineSync = require(`readline-sync`);
const starSize = readlineSync.question("Which size of shirt do you wear (XS/S/M/L/XL/XXL)?")


const isSizFound = availableSizes.includes(starSize);
console.log(isSizFound)
isSizFound?console.log(`size available`):console.log(`Size not available`);