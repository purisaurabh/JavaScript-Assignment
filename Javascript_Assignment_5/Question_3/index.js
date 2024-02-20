//  Do you think JSON.stringify would work for arrays as well? 
// What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?


let value = ["number", 21, "str", "Immanuel"];
let result = JSON.stringify(value);
console.log("value of result = " + result);
console.log("type of result = " + typeof result);


// It si possible to use stringify method for an array

let arr = ["React" , "Javascript" , "Angular" , "Ios"]
let arrResult = JSON.stringify(arr)
console.log("The value is : ",arrResult);
console.log("The type of arrResult : " , typeof arrResult);

// we can also used the stringify method for the nested objects

let nestedObj = {
    value : "Nested",
    add : {
        number : 1,
        str : "nestedString",
    }
}

let nestedResult = JSON.stringify(nestedObj)
console.log("The value is : " , nestedObj);
console.log("The type of nestedResult : " , typeof nestedResult);

// for number
let num = 12
let numJson = JSON.stringify(num)
console.log("The value is : " , numJson);
console.log("The type is : " , typeof numJson);

// for strings
let str = "Hello, World!";
let jsonString = JSON.stringify(str);
console.log("The value is : " , jsonString);
console.log("The type is : " , typeof jsonString);


// for undefined : json is not working fo the undefined
const undefinedValue = undefined;
const jsonUndefined= JSON.stringify(undefinedValue);
console.log("The value is :",jsonUndefined);
console.log("The type is : " , jsonUndefined);

// for null value 
// null value can be converted into string into json
let nullValue = null
let nullJson = JSON.stringify(nullValue)
console.log("The value is : ", nullJson);
console.log("The type is : " , typeof nullJson);