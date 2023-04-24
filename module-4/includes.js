/**
 * string.includes() 👽🧑‍🚀😲
 * 
 * includes returns a boolean value
 */

const displayMessage = "I love to code in dark mode"
const vowels="aeiouAEIOU"

let flag=false;

for(let char of displayMessage){
    if(vowels.includes(char)){
        // console.log(`${char} is a vowel`);
       flag=true;
       break;
    //    console.log(`string has vowels`);
    }else{
        // console.log(`String does not has a vowels`);
        flag=false;
    }
}

if(flag){
    console.log(`string has vowels`);
}else{
    console.log(`string does not have vowels`);
}
