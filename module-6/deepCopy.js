/**
 * Deep Copy ⚓⚓⚓
 *  */

const obj = {
    name: "praveen",
    age: "27",
    add: {
        city: "UK",
        state: "UK",
        landmark: {
            temple: "XYZ",
            Locality: "XYZ"
        }
    }
}


// const copiedObj = {...obj,add:{...obj.add,landmark:{...obj.add.landmark}}}; 
// /**Spread object now both are created at different memory location but it has problems of readability */
// copiedObj.name = "Rawat";
// copiedObj.add.city ="DL"
// copiedObj.add.state ="DL"
// copiedObj.add.landmark.temple="ABC";
// copiedObj.add.landmark.Locality="ABC";
// console.log("CPY obj",copiedObj);
// console.log("ORG obj",obj)

// obj.pinCode="123456";
// obj["pincode"]="123";
// obj[key]="1233"

let key = "pinCode";
obj[key] = "123456";
// console.log(obj)

/**Function for deep copy */

// console.log(Object.keys(obj))


function getCopiedObject(source){
    const targetObj = {};
    const keys = Object.keys(source)
    for(let key of keys){
        // code for cases when internally we have an object key
        if(typeof source[key] === 'object'){
            targetObj[key] = getCopiedObject(source[key])
        }else{
        targetObj[key] = source[key]}
    }
return targetObj;
}

const copiedObj = getCopiedObject(obj);
copiedObj.name = "Rawat"
copiedObj.add.city = "DL"
copiedObj.pinCode = "asdawd"
console.log(obj);
console.log(copiedObj);