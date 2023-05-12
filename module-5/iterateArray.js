/**There are multiple ways to iterate over an array some of them are */

// 1. for loop

array=[1,2,3,4,5,6];
for(index =0;index<array.length;index++){
    console.log(array[index])
}


// 2. while loop

index = 0;
array = [1, 2, 3, 4, 5, 6];

while(index<array.length){
    console.log(array[index]);
    index++;
}

// 3. using forEach method
// it calls the provided function once for every array element in the order

index = 0;
arra.forEach(myFunction);
function myFunction(item,index){
    console.log(item)
}

// 4. using every method in javascript
// every() method check if all elements in an array pass a test(provided as a function)
const under_five = x => x < 5;
if(array.every(under_five)){
    console.log('All are less than 5')
}

// 5. using map
// a map applioes a fgunction over every element and then return the new array
square = x => Math.pow(x,2);
squares =array.map(square);
console.log(array);
console.log(squares);

// 6. using Filter
// it is used to filter values from an array and return the new filtered array

even = x =>x%2===0;
evens = array.filter(even);

// 7. using reduce
// it is used to reduce the array into one single value using some functional logic
const helperSum = (acc,curr)=>acc+curr
sum = array.reduce(helperSum,0);


//  8 . using some
// it is used to check whether some array value passes a test

const lessthanFourCheck = (element) => element < 4;
const lessthanFour = array.some(lessthanFourCheck)