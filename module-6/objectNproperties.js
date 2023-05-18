/** Object and its Properties*/

Objects, in javascript is the most important data-type and forms the building blocks for moden javaScript. These objects are quite different from  js primitive data

javascript primitive data types  (Number, String, Boolean, null, undefined, and symbol) in a sense that these primitive data-types all store a single value each

let school = {
    name: 'Vivekananda School',
    location : 'Delhi',
    established : '1971',
    displayInfo : function(){
        console.log(`${school.name} was established 
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo(); 

/**functions in js objects are known as method of that function 
 * an object is a reference data type. cariables assifned a reference value are givcen a 
 * regerence or a pointer to that value. that reference ior pointer points to the location in memory where the object is stored. The varaibles dont actually store the value
 * objects is defined as an unordered collection of related data, of primitive or reference types in the form of key value poaris. these keys can be variables or functions and are called properties and methods in context of an objectr
 * The property names can be strings or numbers . in case the property names are numbers theuy must be accessed using the bracket notation
 * 
 * let school = {
        name: 'Vivekananda School',
        location : 'Delhi',
        established : '1971',
        20 : 1000,
        displayInfo : function(){
            console.log(`The value of the key 20 is ${school['20']}`);
        }
    }
    school.displayInfo();   
 * 
 * \
 * 
*/
