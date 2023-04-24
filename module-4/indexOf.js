/**
 * indexOf Method 🧨🧨🧨
 * a particular character exists in string or not
 * to find index of particular character in the string
 */



// the second parameter is sometimes the index from which
// we must want to start looking for the number
// if no second parameter is given then it is said to be zero and 
// also for negative case it is 0 presumably since it starts from the
// begining of the string. In the below it will start searching for a after 3

// 1. 
// const displayMessage = "I am a student at geeks for geeks"
// console.log(displayMessage.indexOf("a",3))

// // 2.
// function findCharacter (text,char){
//     const index= text.indexOf(char)
//     if(index===-1){
//         return "character not found";
//     }else{
//         return `character found in the string at index ${index}`;
//     }
// }


const findCharacter = (text,char) => text.indexOf(char) ===-1?"Character not found":"character found"

const result = findCharacter("I am a mentor at GFG","#");
console.log(result)