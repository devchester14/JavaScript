/**
 * For In loop
 */

used to iterate over properties of objects, Loves over keys of object with enbumerable property set to true
enumerable propert in jas means a property that can be viewed if it is irterated using the for in loop or object.jeys.Lovesprpoerties created by simple assignment or peroperty initializer are enumerable by default


<script>
	// Creating a student object
	const student = {
		registration: '12342',
		name: 'Sandeep',
		age: 27,
	};
	
	// This sets the enumerable attribute
	// of marks property to false
	
	Object.defineProperty(student, 'marks', {
		value: 98,
		configurable: true,
		writable: false,
		enumerable: false,
	});
	
	// To print whether enumerable or not
	console.log(student.propertyIsEnumerable('registration'));
	console.log(student.propertyIsEnumerable('name'));
	console.log(student.propertyIsEnumerable('age'));
	console.log(student.propertyIsEnumerable('marks'));
</script>


inherited properties are those which are inherited from the prototype of object as opposed to being defined for the object itself. which is known as the objects own property. 


https://www.geeksforgeeks.org/objects-in-javascript/