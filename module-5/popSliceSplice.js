/**
 * pop, slice, splice ⭐⭐
 */

// let courses = ["html","css","js","reactjs","jQuery","angular","vue"];


// let removedItem = courses.pop();
// console.log(removedItem,`is the removed item`);
// courses.pop()
// console.log(courses,"UPDATED Courses")

//pop removes element from the end of the array



/** To remove something from the middle of the list*/
//starting from 3 delete till 4 but not 4--> returning shallow 
//copy of index from Start to end
//if we do not write the end index then js automatically finds it
// let value = courses.slice(3,4)
//end index is exclusiuve
// console.log(typeof value)
// console.log(courses)


// let userName="praveen"
// // console.log(typeof userName.slice(1));
// let firstUpperCaseChar = userName[0].toUpperCase();
//  let capitalizeName = firstUpperCaseChar+userName.slice(1)
//  console.log(capitalizeName)






/**What does splice do */

let courses = ["html","css","js","reactjs","jQuery","angular","vue"];

courses.splice(4,0,"DSA")
//if second index is zero then we know it
// with splice I can add at give indexc and delete as well
//start index and count of items to be deleted...items to deleted
console.log(courses);


//add a data







