/*
Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 
What do you expect to happen in both cases? What actually happens in both cases. 
What is the difference between an object declared as a let or a const variable?
*/

// so the difference between the let and const is let allow to reassignment of variable but const not 
// but the simillarity is let and const are allow modification

// Array

let letArr = ["GoLang", "React" , "Angular" , "ROR"]
// accessing the arr element
console.log(letArr[0]);
console.log(letArr[letArr.length-1]);

// modifying an array element
letArr[1] = "Flutter"
console.log("After modifying the array : ", letArr);

// Adding the element into an array
letArr.push("Flask")
console.log("The letArr after pushing into the last index : ", letArr);

// removing the element from the arr
letArr.pop()
console.log("After removing the last element from the array" , letArr);

// Removes and returns the first element
letArr.shift()
console.log("After Removed the First elements: ", letArr );

// Removes 2 elements starting from index 1
letArr.splice(1, 2);
console.log("After Removed 2 elements starting from index 1: ", letArr);

// array length
console.log("The length of given array is : " , letArr.length);

// increase and decrease the length of an array
// increase the lenght of an array
letArr.length = 10;
console.log("Array After Increase the Length: ", letArr);
 
// Decrease the lenght of an array
letArr.length = 3;
console.log("Array After Decrease the Length: ", letArr)

// iterating through an array
letArr.push("Flask")
letArr.push("ios")
for(let i = 0; i < letArr.length ; i++){
    console.log(letArr[i]);
}

// array concatenation
let otherCourses = ["Node.js", "Expess.js"];
let newLetArr = letArr.concat(otherCourses)
console.log("After concatenation : " , newLetArr);

// conversation of array into string
letArr = letArr.toString()
console.log("The type of letArr is :" , typeof letArr); // string




// using const
let constArr = ["GoLang", "React" , "Angular" , "ROR"]

console.log(constArr[0]);
console.log(constArr[constArr.length-1]);

// modifying an array element
constArr[1] = "Flutter"
console.log("After modifying the array : ", constArr);

// Adding the element into an array
constArr.push("Flask")
console.log("The letArr after pushing into the last index : ", constArr);

// removing the element from the arr
constArr.pop()
console.log("After removing the last element from the array" , constArr);

// Removes and returns the first element
constArr.shift()
console.log("After Removed the First elements: ", constArr );

// Removes 2 elements starting from index 1
constArr.splice(1, 2);
console.log("After Removed 2 elements starting from index 1: ", constArr);

// array length
console.log("The length of given array is : " , constArr.length);

// increase and decrease the length of an array
// increase the lenght of an array
constArr.length = 10;
console.log("Array After Increase the Length: ", constArr);
 
// Decrease the lenght of an array
constArr.length = 3;
console.log("Array After Decrease the Length: ", constArr)

// iterating through an array
constArr.push("Flask")
constArr.push("ios")
for(let i = 0; i < constArr.length ; i++){
    console.log(constArr[i]);
}

// array concatenation
let otherConstCourses = ["Node.js", "Expess.js"];
let newConstArr = letArr.concat(otherConstCourses)
console.log("After concatenation : " , newConstArr);

// conversation of array into string
letArr = letArr.toString()
console.log("The type of letArr is :" , typeof constArr);  // object