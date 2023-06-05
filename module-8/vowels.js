/**
 * WAP to delete all the vowels from a string.
 */


const string = "The quick brown fox ju,mps over the lazy dog"

function getStrWithNoVowels(str){
    const vowels = ["a","e","i","o","u"]
    let result=""
    for (let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result+=char;
        }
    }
    return result
}

const result = getStrWithNoVowels(string)
console.log(result);