/**
 * Generate Secret code form a given string
 * Input--> prakash
 * Encode By chars
 * Output--> rtcmcuj
 * ASCII table
 */

const inputStr = "prakash"
const shiftByPos = 4;
const getEncodedStr = (str,shiftByPos) => {
    let encodedStr = "";
    let currentPos = 0;
    for(let i=0; i <str.length; i++){
        currentPos = str.charCodeAt(i);
        newPos = currentPos+shiftByPos;
        encodedStr+=String.fromCharCode(newPos)
    }
    return encodedStr
}

console.log(getEncodedStr(inputStr,shiftByPos))