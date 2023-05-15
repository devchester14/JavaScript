/**Array Methods(Push,Concat,Pop,Slice) */

In JavaScript, only objects and arrays are mutable, not primitive values. A mutable object is an object whose state can be modified after it is created. Immutables are the objects whose state cannot be changed once the object is created.

The arr.push() method is used to push one or more values into the array. This method changes the length of the array by the number of elements added to the array.


Syntax:

arr.push(element1, elements2 ....., elementN]])


 

In this example, the function push() adds the numbers to the end of the array.

<script>

    function func() {

        var arr = ['1', '2', '3'];

         

        // Pushing the element into the array

        arr.push('GeeksforGeeks');

                console.write(arr);

     }

    func();

</script>


Output: 1,2,3,GeeksforGeeks


 

Concat

The concat() method concatenates (joins) two or more arrays. It returns a new array, containing the joined arrays. It does not change the existing arrays.


 
Syntax:

array1.concat(array2, array3, ..., arrayX)



Example:

const arr1 = ["Casey", "Liza"];

const arr2 = ["Emily", "Toby", "44"];

const children = arr1.concat(arr2); 


 

Output:  Casey,Liza,Emily,Toby,44


 

Example of Array concat() method to join three arrays.



 

<script>

// JavaScript code for concat() method

function func() {

    var num1 = [1, 1, 1],

        num2 = [4, 5, 6],

        num3 = [7, 8, 9];

    console.log(num1.concat(num2, num3));

}

func();

</script>


 

Output:

[1,2,3,4,5,6,7,8,9]


Array Method - pop, splice

The arr.pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array.


Syntax:

arr.pop()


This method does not accept any parameter.

It returns the removed element array. If the array is empty, then this function returns undefined.


<script>

    function func() {

        var arr = ['1', '2', '3', '4'];

             // Popping the last element from the array

        console.log(arr.pop());

        console.log(arr);

    }

    func();

</script>


 

Output: 

4

1,2,3



 

Slice()

The arr. slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.


Syntax:

arr.slice(begin, end)


This method accepts two parameters as mentioned above and described below:

This method returns a new array containing some portion of the original array. 

<script> function func() {

// Original Array 

var arr = [3,5,7,2,8,1]; 

// Extracted array 

var new_arr = arr.slice(2,4); 

console.log(arr);

console.log("<br>"); 

console.log(new_arr);

 } 

func(); 

</script> 


 

Output: [3,5,7,2,8,1] [7,2]



 

Splice()

The arr.splice() method is an inbuilt method in JavaScript which is used to modify the contents of an array by removing the existing elements and/or by adding new elements.

Syntax:  

Array.splice( index, remove_count, item_list )

Parameter: This method accepts many parameters some of them are described below: 

index: It is a required parameter. This parameter is the index which start modifying the array (with origin at 0). This can be negative also, which begins after that many elements counting from the end.

remove_count: The number of elements to be removed from the starting index.

items_list: The list of new items separated by comma operator that is to be inserted from the starting index.

Return Value: While it mutates the original array in-place, still it returns the list of removed items. In case there is no removed array it returns an empty array.



Example 1 : 

At position 2, add 2 elements:

const fruits = ["Red", "Orange", "Blue", "Yellow"];

fruits.splice(2, 0, "Green", "Purple");


 

Output:

Red,Orange,Green,Purple,Blue,Yellow



 

Example 2: 

At position 2, remove 2 items:

const fruits = ["Red", "Orange", "Blue", "Yellow", "Purple"];

fruits.splice(2, 2);


Output:

Red,Orange,Purple