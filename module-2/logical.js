/**Logical operators 
 * OR || for it to return true, atleast one condtions should be true, false only when all the conditions are false 
 * AND && all the conditions true then only and will return true otherwise it will always be false
 * NOT ! 
 * NULLISH CALESCING
*/

const physics = 90;
const maths = 80;
const chemistry = 90;
const biology = 96;

// if(physics > 85 && maths > 85 && chemistry > 85 ){
//     console.log(`You are eligible`);
// }else{
//     console.log(`you are not eligible`);
// }


// if(physics > 90 || maths > 85 || chemistry > 89 ){
//     console.log(`You are eligible`);
// }else{
//     console.log(`you are not eligible`);
// }

const isStudentEligible = false;

if(!isStudentEligible){
    console.log(`your are eligible`);
}
