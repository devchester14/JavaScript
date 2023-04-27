/**
 * Arrays 🌩️🌩️🌩️-> Non primitive data type
 */

let s1="prakash";
let s2="praveen";
let s3="sunny";
let s4="Rawat";

// array is collection of one more items in a given sequence
/**
 * in a non primitive data type you can store complex data
 */

let studentName = ["praveen","rawat","sunny","rawat","aman","balli",["arcStar","Thermite"],1,2,3,{schoolName:"PPS"}]



/**
 * Dry means, do not repeat yourself. DRY CODE
 */
let arrLength = studentName.length

for(let i=0;i<arrLength;i++){
    console.log(studentName[i])
}