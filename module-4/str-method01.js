/**
 * String methods 🔥🔥🔥🔥
 */

// const displayMessage="Taking javascript lessons from geeks for geeks"
// const index = 1
// const char = displayMessage.charAt(100)
// console.log(char)
/**
character at particular index using charAt(index) method in 
javascript if no index is passed then it will give 0, 
default index is zero value
if index is passed that is not their in the string then it will give
an empty string
 */


// charCodeAt

// const displayMessage="I Speeding up the learning grind";
// const index=0;
// const char = displayMessage.charCodeAt(10)
// console.log(char);

/**
 * Given a string
 * Geeks-->iffmu
 * 
 * Using a string method fromCharCode()
 */

let input = "geeks";
let output = "";

for (let i = 0; i < input.length; i++) {
  // increase the ASCII code of each character by one
  let charCode = input.charCodeAt(i) + 1;
  // add the new character to the output string
  output += String.fromCharCode(charCode);
}

console.log(output); // prints "iffmu" to the console


/**
 * let input = "geeks";
let output = "";

for (let i = 0; i < input.length; i++) {
  // increase the ASCII code of each character by one
  let charCode = input.charCodeAt(i) + 1;
  
  // special case for the second 'f' character
  if (input[i] === 'f') {
    charCode += 1;
  }
  
  // add the new character to the output string
  output += String.fromCharCode(charCode);
}

console.log(output); // prints "iffmu" to the console

 */