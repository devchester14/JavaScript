/**Split and join */

js str.split() method is used to split the given string into an array of strings by seperating it into substrings using
a specific seperator 

str.split(seperator,limit);
SEPERATOR: it is used to specify the character or the refular expressiojn to use for splitting the string. if it is not specified 
then the entire string becomes one single array Element. the same also happens whenm the seperaotr is not present in the string. if the seperator is an empty
string then every character of the string is seperated
LIMIT: defines the ipper limit on the number of splits to be found in the given string. if the string remains unchecked after the limit is reached thenm it is not 
reported in the array.Element
RETURN VALUE: this function returns an array of strings that is formed after splitting the given string at each point where separator occurs.

var str = 'It iS a 5r&e@@t Day.'
var array = str.split(" ",2);
print(array);

Output: In this example, the function split() creates an array of strings by splitting str wherever ” ” occurs. The second argument 2 limits the number of such splits to only 2.

[It,iS]



Array join() method:

the array.join() method is used to join the elements of an array into a string. The elements of the string will be seperated by a specified separator and its default value is a comma(,).Array
array.join(seperator)

PARAMETERS: this method accepts single parameter as mentioned above and described below:

SEPERATOR: it can either used as  parameter or not. its default value is a comma(,)

RETURN VALUE: it returns the string which contain the collection of arrays elements