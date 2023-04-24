/**
 * Decimal to Binary conversion of a number
 */

function toBinary(str) {
    // write your code here
    let binary = ""
    while(str>0){
        binary=(str%2)+binary;
        str=Math.floor(str/2)
    }
    return binary
}

console.log(toBinary(11))