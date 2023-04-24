/**
 * Start Pattern
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 */

const symbol="* "
// console.log(symbol.repeat(2))

// for(let i=1; i<=10; i++){
//     console.log(symbol.repeat(i))
// }

// for(let i=9; i>=1; i--){
//     console.log(symbol.repeat(i))
// }

// const userName="Praveen Rawat";

// let count = 0;
// for (let i=0; i<userName.length;i++){
//     count++
//     console.log(count)
// }

// console.log(count)

/**
 * given a range of numbers find all the even numbers 1 - 101
 */

// let remainder;
// for (let i = 1; i<=101; i++){
//    remainder = i % 2
//     if(remainder === 0){
//         console.log(`${i} is an even number`)
//     }else{
//         console.log(`${i} is an odd number`);
//     }

// }

// "string".includes("char")
// // includes gives true and false values


// const inputString = "hello, This is a string"

// const vowels = "aeiou"

// for(let i=0;i<inputString.length;i++){
//     if(vowels.includes(inputString[i])){
//         console.log(`${inputString[i]} is a vowel`);
//     }else{
//         console.log(`${inputString[i]} is not vowel`);
//     }
// }


/**
 * given a range of numbers find all the even numbers 1 - 101
 */

// let remainder;
// for (let i = 1; i<=101; i++){
//    remainder = i % 2
//     if(remainder === 0){
//         console.log(`${i} is an even number`)
//     }else{
//         console.log(`${i} is an odd number`);
//     }

// }

// isPrime or not using recursion

// return true if prime else returns false 
// i is the current divisor to check

function isPrime(n,i) {
    if(n<=2)
    return (n==2)? true : false;
    if( n % i == 0) return false;
    if(i * i > n ) return true

    // check for next divisor
    return isPrime(n,i+1)
}

let n = 2;
if(isPrime(n,2))
    {
        console.log(`YES`);
    }
    else{
        console.log(`NO`);
    }