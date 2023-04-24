/**
 * A program that reads 3 strings and prints the smallest string
 */

const firstString = "apple2";
const secondString = "apple2";
const thirdString = "papaya22";

console.log(firstString.length);
console.log(secondString.length);
console.log(thirdString.length);

const lengthOfFirstStr = firstString.length;
const lengthOfSecondStr = secondString.length;
const lengthOfThirdStr = thirdString.length;

const smallestString =
  lengthOfFirstStr < lengthOfSecondStr && lengthOfFirstStr < lengthOfThirdStr
    ? `${firstString} is the smallest`
    : lengthOfSecondStr < lengthOfFirstStr &&
      lengthOfSecondStr < lengthOfThirdStr
    ? `${secondString} is the smallest`
    : lengthOfThirdStr < lengthOfFirstStr &&
      lengthOfThirdStr < lengthOfSecondStr
    ? `${thirdString} is the smallest`
    : `Encountered Two strings with same length`;
console.log(smallestString);
