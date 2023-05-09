
/**
 * You are given a list numbers that contains integers. You need to return average of the non negative integers.

Example 1:

Input:
numbers = [-12, 8, -7, 6, 12, -9, 14]
Output:
avg = 10.0
Explanation: The positive numbers are 
8 6 12 14. The sum is 8+6+12+14 = 40, 
Average = 40/4 = 10.0

Example 2:

Input:
numbers = [1, 2, 3]
Output:
avg = 2.0
Explanation: The positive numbers are 
1 2 3. The sum is 1+2+3 = 6, 
Average = 6/3 = 2.0

Your Task:
Write the code at the mentioned place and return the average of the positive numbers. The function posAverage takes numbers list as an argument and expects average of non negative numbers as a return value.

 */


















const arrPosAvg =  (arr) =>{
    let count=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
    sum+=arr[i];
    count++;
    }
    }
    return sum/count;
    }
    
    let numbers = [-12, 8, -7, 6, 12, -9, 14];
    const result = arrPosAvg(numbers);
    console.log(result);