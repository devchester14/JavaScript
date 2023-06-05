// /**
//  * Palindrome String
//  */

// const str = "madam";

// const arrOfChar = str.split("");
// const reversedChar = arrOfChar.reverse();

// const reveredString = reversedChar.join("")

// if( str === reveredString){
//     console.log("Palindrome")
// }else{
//     console.log("not palindrome")
// }

// const str = "geeks"

// const revStr = str.split("").reverse().join("")

// using for loop

const str = "madam"

const getRevString = (str) => {
    let reversedString="";
    for(let i=str.length-1;i>=0;i--){
        reversedString+=str[i]
    }
    return reversedString;
}

const result = getRevString(str);
result===str?console.log("Palindrome"):console.log("not palindrome");