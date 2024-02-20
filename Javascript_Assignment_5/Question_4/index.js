/*
    What happens if you pass a regular/invalid JSON string to JSON.parse? 
    What will happen if such an invalid function runs in the program? 
    Will other parts of the code execute correctly after that?
*/


// checking the valid data

let validData = `{"Name":"John" , "Age":30}`
let pareValidData = JSON.parse(validData)
console.log("The value is : " , pareValidData);
console.log("The type is : " , typeof pareValidData);



// for the invalid data using the above example
// let invalidData = `{Name:"John" , Age:30}`
// let parseInvalidData = JSON.parse(invalidData)
// console.log("The value is : " , parseInvalidData);
// console.log("The type is : " , typeof parseInvalidData);

// it will give the syntas error


// checking valid and invalid data through the function 

const validJsonData = `{
    "Course1" : "ReactJS",
    "Course2" :"Javascript",
    "Course3":"Angular",
    "Course4":"Typescript"
}`

console.log("Valid json data : " , validJsonData);
console.log("type of Valid json data : " , typeof validJsonData);


let res = {};

function isValidJsonData(checkStr){
    if(typeof checkStr !== "string"){
        return false
    }

    try {
        res = JSON.parse(checkStr)
        return true
    } catch (error) {
        return false
    }
}

if(isValidJsonData(validJsonData)){
    console.log("The given data is converted to the object");
    console.log("The object is : " ,res);
    console.log("The type is : " , typeof res);

}else{
    console.log("The given data is not valid");
}