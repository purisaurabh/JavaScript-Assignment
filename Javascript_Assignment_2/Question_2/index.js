// How can you find if a variable is an array or NaN besides typeof?

// to check the array
let arr = [1,2,3,4]

if(Array.isArray(arr)){
    console.log("It is an array");
}else{
    console.log("It is not an arrya");
}


// to check the NaN value

let checkValue = NaN
if(Number.isNaN(checkValue)){
    console.log("It is NaN value");
}else{
    console.log("It is not NaN value");
}