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
// Output : GoLang
console.log(letArr[letArr.length-1]);
// Output : ROR



// modifying an array element
letArr[1] = "Flutter"
console.log("After modifying the array : ", letArr);
//Output : After modifying the array :  [ 'GoLang', 'Flutter', 'Angular', 'ROR' ]



// Adding the element into an array
letArr.push("Flask")
console.log("The letArr after pushing into the last index : ", letArr);
//Output : The letArr after pushing into the last index :  [ 'GoLang', 'Flutter', 'Angular', 'ROR', 'Flask' ]


// removing the element from the arr
letArr.pop()
console.log("After removing the last element from the array" , letArr);
//Output : After removing the last element from the array [ 'GoLang', 'Flutter', 'Angular', 'ROR' ]


// Removes and returns the first element
letArr.shift()
console.log("After Removed the First elements: ", letArr );
//Output : After Removed the First elements:  [ 'Flutter', 'Angular', 'ROR' ]



// Removes 2 elements starting from index 1
letArr.splice(1, 2);
console.log("After Removed 2 elements starting from index 1: ", letArr);
// Output : After Removed 2 elements starting from index 1:  [ 'Flutter' ]



// array length
console.log("The length of given array is : " , letArr.length);
// Output : The length of given array is :  1



// increase and decrease the length of an array
// increase the lenght of an array
letArr.length = 10;
console.log("Array After Increase the Length: ", letArr);
// Output : Array After Increase the Length:  [ 'Flutter', <9 empty items> ]


 
// Decrease the lenght of an array
letArr.length = 3;
console.log("Array After Decrease the Length: ", letArr)
// Output : Array After Decrease the Length:  [ 'Flutter', <2 empty items> ]



// iterating through an array
letArr.push("Flask")
letArr.push("ios")
for(let i = 0; i < letArr.length ; i++){
    console.log(letArr[i]);
}
/*
Output : Flutter
undefined
undefined
Flask
ios
*/



// array concatenation
let otherCourses = ["Node.js", "Expess.js"];
let newLetArr = letArr.concat(otherCourses)
console.log("After concatenation : " , newLetArr);
// Output : After concatenation :  [ 'Flutter', <2 empty items>, 'Flask', 'ios', 'Node.js', 'Expess.js' ]



// Using the spread operator (...):
let concatenatedArray = [...letArr, ...otherCourses];
console.log("Using spread operator : " , concatenatedArray);
/*
Output: Using spread operator :  [
  'Flutter',
  undefined,
  undefined,
  'Flask',
  'ios',
  'Node.js',
  'Expess.js'
]
*/

// Using push() method with the spread operator:
letArr.push(...otherCourses);
console.log("using push : ",letArr);
// Output : using push :  [ 'Flutter', <2 empty items>, 'Flask', 'ios', 'Node.js', 'Expess.js' ]



// conversation of array into string
letArr = letArr.toString()
console.log("The type of letArr is :" , typeof letArr); 
// Output : The type of letArr is : string




// using const
let constArr = ["GoLang", "React" , "Angular" , "ROR"]

console.log(constArr[0]);
// Output : GoLang
console.log(constArr[constArr.length-1]);
// Output : ROR

// modifying an array element
constArr[1] = "Flutter"
console.log("After modifying the array : ", constArr);
//Output : After modifying the array :  [ 'GoLang', 'Flutter', 'Angular', 'ROR' ]



// Adding the element into an array
constArr.push("Flask")
console.log("The letArr after pushing into the last index : ", constArr);
//Output : The letArr after pushing into the last index :  [ 'GoLang', 'Flutter', 'Angular', 'ROR', 'Flask' ]



// removing the element from the arr
constArr.pop()
console.log("After removing the last element from the array" , constArr);
//Output : After removing the last element from the array [ 'GoLang', 'Flutter', 'Angular', 'ROR' ]



// Removes and returns the first element
constArr.shift()
console.log("After Removed the First elements: ", constArr );
//Output : After Removed the First elements:  [ 'Flutter', 'Angular', 'ROR' ]



// Removes 2 elements starting from index 1
constArr.splice(1, 2);
console.log("After Removed 2 elements starting from index 1: ", constArr);
// Output : After Removed 2 elements starting from index 1:  [ 'Flutter' ]




// array length
console.log("The length of given array is : " , constArr.length);
// Output : The length of given array is :  1




// increase and decrease the length of an array
// increase the lenght of an array
constArr.length = 10;
console.log("Array After Increase the Length: ", constArr);
// Output : Array After Increase the Length:  [ 'Flutter', <9 empty items> ]



// Decrease the lenght of an array
constArr.length = 3;
console.log("Array After Decrease the Length: ", constArr)
// Output : Array After Decrease the Length:  [ 'Flutter', <2 empty items> ]



// iterating through an array
constArr.push("Flask")
constArr.push("ios")
for(let i = 0; i < constArr.length ; i++){
    console.log(constArr[i] , ",");
}
/*
Output : Flutter
undefined
undefined
Flask
ios
*/




// array concatenation
let otherConstCourses = ["Node.js", "Expess.js"];
let newConstArr = letArr.concat(otherConstCourses)
console.log("After concatenation : " , newConstArr);
// Output : After concatenation :  [ 'Flutter', <2 empty items>, 'Flask', 'ios', 'Node.js', 'Expess.js' ]




//  using spread operator
const newArr = [...constArr , ...otherConstCourses]
console.log("using spread operator : " , newArr)
/*
Output: Using spread operator :  [
  'Flutter',
  undefined,
  undefined,
  'Flask',
  'ios',
  'Node.js',
  'Expess.js'
]
*/




// conversation of array into string
letArr = letArr.toString()
console.log("The type of letArr is :" , typeof constArr);
// Output : The type of letArr is : object