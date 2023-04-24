/**
 * Exercise
 * 🏃✊
 */

//sum of all numbers from 1-20

const calcSum = (minNum, maxNum) =>{
    let total=0;
    for( i=minNum;i<=maxNum;i++){
        total += i
    }
    return total;
}

const result = calcSum(1,20);
console.log(result);