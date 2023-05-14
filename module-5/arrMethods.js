/**
 * Array push, pop and slice methods
 */

const { setEncoding } = require("readline-sync")

Array push() Method:

the Array.push() method is used to push one or more values into the Array. this method changes the length of the array by the number of elemenets added to the array.Array

syntax:
arr.push(element1,element2...,elementN)

parameters: this method contains as many numbers of parameters as the number of elements to be inserted into the array. Return value: this method
returns the new length of the array after insertng the arguments into the array.Array


example:
arr.pop() arr.pop is used to remove the last element of the array and also returns the removed element. this function devreases the  length of the array. there is no oarameter in this arr
this method returns the removed element array. if the array is empty then this function retunrs undefined


Array slice() method:
the arr.slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.
arr.slice(begin, end)
Begin: inclusived parameter defines the starting index from where the pirtion is to be extracted. if this arg is missing then the method takes begin as 0 as defaukt start value;
End:End index is exclusive, this parameter is the index upto which the portion is to ve extracted. excluding the end index. if not defined then array till the end is extracted.Array

example:

function func(){
    var arr = [23,56,87,32,72,13];
    var newarr=arr.slice(2,4)
    console.log(arr,newarr);
    }

    [87,32] is the output for setEncoding

    