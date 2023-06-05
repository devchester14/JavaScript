/**
 * mask the last 4 with #
 */

const str="123456789987654321" //12345678998765####


// const repeatChar="#".repeat(4)

// const result = str.slice(0,str.length-4)+repeatChar;
// console.log(result);
let stringMasked=""

for(let item in str){
    if(item<str.length-4){
        stringMasked+=str[item]
    }else{
        stringMasked+="#"
    }
}

console.log(stringMasked)

